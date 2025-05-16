import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function BusinessList({ businessList, title }) {
    return (
        <div className='mt-12 mb-12'>
            <h2 className='font-bold text-[32px]'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div key={index} className='shadow-md rounded-lg cursor-pointer hover:shadow-lg hover:shadow-red-200 hover:scale-102 transition-all ease-in-out'>
                        <Image
                            src={business.images[0]?.url}
                            alt='business img'
                            width={500}
                            height={300}
                            className='h-[350px] md:h-[300px] object-cover rounded-lg'
                        />
                        <div className='flex flex-col gap-2 p-3'>
                            {/* Category badge */}
                            <h2 className='p-1 bg-red-100 text-red-500 rounded-full px-2 text-[16px] w-fit'>
                                {business.category.name}
                            </h2>

                            {/* Business info + button row */}
                            <div className='flex justify-between items-start w-full gap-2 mb-2.5'>
                                <div className='space-y-[2px]'>
                                    <h2 className='font-bold text-lg text-[17px]'>{business.name}</h2>
                                    <h2 className='text-red-500'>{business.contactPerson}</h2>
                                    <h2 className='text-gray-500 text-sm'>{business.email}</h2>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Button className=' cursor-pointer !bg-[#e42b50f1] hover:!bg-[#e42b50f1] text-sm h-9 px-4 rounded-full'>
                                        Book Now
                                    </Button>
                                    <Button className=' cursor-pointer !bg-[#555253ab] hover:!bg-[#575455b4] text-sm h-9 px-4 rounded-full'>
                                        Schedule
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )):(
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                      <div
                        className='h-[300px] w-full bg-slate-200 animate-pulse rounded-lg'
                        key={index}
                      ></div>
                    ))
                  )
            }
            </div>
        </div>
    )
}

export default BusinessList