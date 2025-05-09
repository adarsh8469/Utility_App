import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
function Hero() {
  return (
    <div className='flex items-center flex-col justify-center pt-14 pb-7 gap-3'>
        <h1 className='font-bold text-[30px] mb-4 cursor-pointer'>Welcome to <span className='text-[#e42b50f1] cursor-pointer'><b>Intelli Grip</b></span></h1>
        <h2 className='font-bold text-[56px] text-center cursor-pointer'>Find Home <span className='text-[#e42b50f1] '><b>Sevice/Repair</b></span> Near You</h2>
        <h2 className='text-[23px] text-gray-700 cursor-pointer'>Explore Best Home Service & Repair Near You</h2>
        <div className='mt-5 flex gap-5 items-center cursor-pointer'>
            <Input placeholder='Search' className=' text-semibold rounded-full md:w-[350px] h-[42px]'/>
            <Button className='p-5 bg-[#e42b50f1] hover:!bg-[#e42b50f1] rounded-full h-[42px] w-[50px] cursor-pointer'>
                <Search className='font-bold h-7 w-7'/>
            </Button>
        </div>
    </div>
  )
}

export default Hero
