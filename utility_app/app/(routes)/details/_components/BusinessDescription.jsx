import Image from 'next/image'
import React from 'react'

function BusinessDescription({ business, loading }) {
  if (loading) {
    return (
      <div className='px-0 sm:px-2 animate-pulse'>
        <div className='h-6 w-40 bg-gray-300 rounded mb-4' />
        <div className='space-y-3 mb-8'>
          <div className='h-4 w-full bg-gray-300 rounded' />
          <div className='h-4 w-11/12 bg-gray-300 rounded' />
          <div className='h-4 w-5/6 bg-gray-300 rounded' />
        </div>

        <div className='h-6 w-40 bg-gray-300 rounded mb-4' />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='w-full h-[150px] bg-gray-300 rounded-lg'></div>
          ))}
        </div>
      </div>
    );
  }

  return business?.name && (
    <div className='px-0 sm:px-2'>
      <h2 className='font-bold text-xl sm:text-2xl md:text-[25px] text-center sm:text-left'>
        Description
      </h2>

      <p className='mt-4 text-base sm:text-lg text-gray-600 text-justify'>
        {business.about}
      </p>

      <h2 className='font-bold text-xl sm:text-2xl md:text-[25px] mt-8 text-center sm:text-left'>
        Gallery
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {business?.images?.map((item, index) => (
          <div key={index} className='w-full'>
            <Image
              src={item?.url}
              alt='business gallery'
              width={700}
              height={200}
              className='rounded-lg w-full h-auto object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessDescription;