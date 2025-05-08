import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='p-5 shadow-sm flex'>
            <div className='flex items-center gap-8'>
                <Image src='./logo.svg' alt='Intelli Grid'
                    width={190} height={110} />
                <div className='flex items-center gap-6'>
                    <h2>Home</h2>
                    <h2>Services</h2>
                    <h2>About us</h2>
                </div>
            </div>
        </div>
    )
}

export default Header