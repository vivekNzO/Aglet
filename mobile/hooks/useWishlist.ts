import { View, Text } from 'react-native'
import React from 'react'
import { useApi } from '@/lib/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Product } from '@/types'

const useWishlist = () => {
    const api = useApi()
    const queryClient = useQueryClient()

    const {data:wishlist, isLoading,isError} = useQuery({
        queryKey:["wishlist"],
        queryFn:async()=>{
            const {data} = await api.get<{wishlist:Product[]}>("/users/wishlist")
            return data.wishlist
        }
    })

    const addToWishListMutation = useMutation({
        mutationFn:async(productId:string)=>{
            const {data} = await api.post<{wishlist:string[]}>("/users/wishlist",{productId})
            return data.wishlist
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["wishlist"]})
        }
    })

    const removeFromWishListMutation = useMutation({
        mutationFn:async(productId:string)=>{
            const {data} = await api.delete<{wishlist:string[]}>(`/users/wishlist/${productId}`)
            return data.wishlist
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["wishlist"]})
        }
    })

    const isInWishlist = (productId:string)=>{
        return wishlist?.some((product)=>product._id === productId) ?? false
    }

    const toggleWishlist = (productId:string)=>{
        if(isInWishlist(productId)){
            removeFromWishListMutation.mutate(productId)
        }else{
            addToWishListMutation.mutate(productId)
        }
    }
  return {
    wishlist : wishlist || [],
    isLoading,
    isError,
    wishlistCount : wishlist?.length || 0,
    isInWishlist,
    toggleWishlist,
    addToWishlist:addToWishListMutation.mutate,
    removeFromWishlist:removeFromWishListMutation.mutate,
    isAddingToWishlist:addToWishListMutation.isPending,
    isRemovingFromWishlist:removeFromWishListMutation.isPending
  }
}
export default useWishlist