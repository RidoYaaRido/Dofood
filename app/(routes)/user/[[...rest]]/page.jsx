"use client"
import { UserButton, UserProfile } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

function User() {
  return (
    <div className='flex justify-center items-center'>
        <UserProfile>
            <UserButton.UserProfilePage
            labelIcon={<ShoppingBag className='h-5 w-5' />}
            url="my-orders"
        >
           
        </UserButton.UserProfilePage>
        
        </UserProfile>
    </div>
  )
}

export default User