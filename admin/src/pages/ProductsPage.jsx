import React from 'react'
import { useState } from 'react'
import {PlusIcon, PencilIcon,Trash2Icon,XIcon,ImageIcon} from 'lucide-react'
import {productApi} from '../lib/api'
import {getStockStatusBadge} from "../lib/utils"

import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"

function ProductsPage() {
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name:"",
    category:"",
    price:"",
    stock:"",
    description:""
  })
  const [images,setImages] = useState([])
  const [imagePreviews,setImagePreviews] = useState([])

  const {data:products = []} = useQuery({
    queryKey:["products"],
    queryFn:productApi.getAll
  })
  //create, update, delete -> use mutation
  const createProductMutation = useMutation({
    mutationFn:productApi.create,
    onSuccess: ()=>{
      
    }
  })

  const updateProductMutation = useMutation({
    mutationFn:productApi.update,
    onSuccess: ()=>{
      
    }
  })

  const closeModal = ()=>{
    //reset state
    setShowModal(false)
    setEditingProduct(null)
    setFormData({
      name:"",
      category:"",
      price:"",
      stock:"",
      description:""
    })
    setImages([])
    setImagePreviews([])
  }

  const handleEdit = (product)=>{
    setEditingProduct(product)
    setFormData({
      name:product.name,
      category:product.category,
      price:product.price.toString(),
      stock:product.stock.toString(),
      description:product.description
    })
    setImagePreviews(product.images)
    setShowModal(true)
  }

  const handleImageChange = (e)=>{
    const files = Array.from(e.target.files)
    if(files.length>3) return alert("Maximum 3 images allowed")
    setImagePreviews(files.map((file)=>URL.createObjectURL(file)))
    setImages(files)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!editingProduct && imagePreviews.length===0){
      return alert("Please upload atleast one image")
    }
    const formDataToSend = new FormData()
    formDataToSend.append("name",formData.name)
    formDataToSend.append("description",formData.description)
    formDataToSend.append("price",formData.price)
    formDataToSend.append("stock",formData.stock)
    formDataToSend.append("category",formData.category)

    //only append new images if they were selected 
    if(images.length>0){
      images.forEach(image=>formDataToSend.append("images",image))
    }
    if(editingProduct){
      updateProductMutation.mutate({id:editingProduct._id,formData:formDataToSend})
    }else{
      createProductMutation.mutate(formDataToSend)
    }
  }

  return (
    <div>

    </div>
  )
}

export default ProductsPage