import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function Header() {
    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Image src='./logo.svg' alt='Intelli Grid'
                    width={190} height={110} />
                <div className='md:flex items-center gap-6 cursor-pointer hidden'>
                    <h2 className='hover:scale-105  font-semibold transition duration-200'>Home</h2>
                    <h2 className='hover:scale-105  font-semibold transition duration-200'>Services</h2>
                    <h2 className='hover:scale-105  font-semibold transition duration-200'>Explore</h2>
                    <h2 className='hover:scale-105 text-[#e42b50f1] font-semibold transition duration-200'>Subscription</h2>
                    <h2 className='hover:scale-105  font-semibold transition duration-200'>About us</h2>
                </div>
            </div>
            <div>
                <Button className="!bg-[#e42b50f1] hover:!bg-[#e42b50f1] text-white font-semibold">
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default Header