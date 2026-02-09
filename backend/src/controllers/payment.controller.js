import { ENV } from "../config/env.js"
import Stripe from 'stripe'
import { Product } from "../models/product.model.js"
import { User } from "../models/user.model.js"


const stripe = new Stripe(ENV.STRIPE_SECRET_KEY)

export const createPaymentIntent = async()=>{
    try {
        const {cartItems, shippingAddress} = req.body
        const user = req.user
        if(!cartItems || cartItems.length===0){
            return res.status(400).json({error:"Cart is empty"})
        }

        // never trust a client
        let subtotal = 0;
        const validatedItems = [];

        for(const item of cartItems){
            const product = await Product.findById(item.product._id)
            if(!product){
                return res.status(404).json({error:`Product ${item.product.name} not found`})
            }

            if(product.stock<item.quantity){
                return res.status(404).json({error: `Insufficient stock for ${product.name}`})
            }

            subtotal+=product.price*item.quantity;
            validatedItems.push({
                product:product._id.toString(),
                name:product.name,
                price:product.price,
                quantity:item.quantity,
                image:product.images[0]
            })
        }

        const shipping = 50;
        const tax = subtotal*0.08;
        const total = subtotal + shipping + tax;
        if(total<=0){
            return res.status(404).json({error:"Invalid order total"})
        }

        let customer;
        if(user.stripeCustomerId){
            customer = await stripe.customers.retrieve(user.stripeCustomerId)
        }else{
            customer = await stripe.customers.create({
                email:user.email,
                name:user.name,
                metadata:{
                    clerkId: user.clerkId,
                    userId: user._id.toString()
                }
            })

            await User.findByIdAndUpdate(user._id,{stripeCustomerId:customer.id})
        }

        // create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount:Math.round(total*100),
            currency:"inr",
            customer:customer.id,
            automatic_payment_methods:{
                enabled:true,
            },
            metadata:{
                clerkId:user.clerkId,
                userId:user._id.toString(),
                orderItems: JSON.stringify(validatedItems),
                shippingAddress:JSON.stringify(shippingAddress),
                totalPrice:total.toFixed(2)
            }
        })

        res.status(200).json({clientSecret:paymentIntent.client_secret})
    } catch (error) {
        console.error("Error creating payment intent: ",error)
        res.status(500).json({error:"Failed to create payment intent"})
    }
}