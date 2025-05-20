"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function Hero() {
  return (
    <div className='flex items-center flex-col justify-center pt-14 pb-7 gap-3 px-4'>
      <h1 className='font-bold text-2xl sm:text-3xl mb-4 cursor-pointer'>
        Welcome to <span className='text-[#e42b50f1] cursor-pointer'><b>Intelli Grip</b></span>
      </h1>
      <h2 className='font-bold text-3xl sm:text-5xl text-center cursor-pointer'>
        Find Home <span className='text-[#e42b50f1]'><b>Sevice/Repair</b></span> Near You
      </h2>
      <h2 className='text-base sm:text-xl text-gray-700 text-center cursor-pointer'>
        Explore Best Home Service & Repair Near You
      </h2>

      {/* Search Input and Button */}
      <div className='mt-5 flex items-center gap-3 sm:gap-5 w-full max-w-[90%] sm:max-w-md md:max-w-lg'>
        <Input
          placeholder='Search'
          className='text-semibold rounded-full h-[42px] w-[70%] sm:w-full'
        />
        <Button className='p-0 bg-[#e42b50f1] hover:!bg-[#e42b50f1] rounded-full h-[42px] w-[42px] min-w-[42px]'>
          <Search className='h-5 w-5' />
        </Button>
      </div>
    </div>
  )
}

export default Hero