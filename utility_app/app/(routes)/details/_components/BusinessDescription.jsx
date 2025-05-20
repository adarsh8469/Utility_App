import Image from 'next/image'
import React from 'react'

function BusinessDescription({ business }) {
  return business?.name && (
    <div className='px-4 sm:px-0'>
      {/* Description Title */}
      <h2 className='font-bold text-xl sm:text-2xl md:text-[25px] text-center sm:text-left'>
        Description
      </h2>

      {/* About Paragraph */}
      <p className='mt-4 text-base sm:text-lg text-gray-600 text-justify'>
        {business.about}
      </p>

      {/* Gallery Title */}
      <h2 className='font-bold text-xl sm:text-2xl md:text-[25px] mt-8 text-center sm:text-left'>
        Gallery
      </h2>

      {/* Responsive Image Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {business?.images?.map((item, index) => (
          <div key={index} className='w-full h-auto'>
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
  )
}

export default BusinessDescription
