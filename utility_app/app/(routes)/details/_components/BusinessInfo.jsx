import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, NotebookPen, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({ business, loading }) {
  if (loading) {
    return (
      <div className='flex flex-col md:flex-row gap-5 items-center md:items-start animate-pulse'>
        <div className='h-[190px] w-[190px] bg-gray-300 rounded-full'></div>

        <div className='flex flex-col sm:flex-row w-full gap-5 sm:justify-between items-center sm:items-start'>
          {/* Left Skeleton */}
          <div className='flex flex-col items-center sm:items-start gap-3 mt-2 w-full sm:w-1/2'>
            <div className='h-5 w-24 bg-gray-300 rounded-full' />
            <div className='h-6 w-40 bg-gray-300 rounded' />
            <div className='h-4 w-56 bg-gray-300 rounded' />
            <div className='h-4 w-48 bg-gray-300 rounded' />
          </div>

          {/* Right Skeleton */}
          <div className='flex flex-col items-center sm:items-end gap-4 w-full sm:w-1/2'>
            <div className='h-10 w-10 bg-gray-300 rounded' />
            <div className='h-4 w-40 bg-gray-300 rounded' />
            <div className='h-4 w-48 bg-gray-300 rounded' />
          </div>
        </div>
      </div>
    );
  }

  return business?.name && (
    <div className='flex flex-col md:flex-row gap-5 items-center md:items-start'>
      <Image
        src={business?.images[0]?.url}
        alt={business.name}
        width={190}
        height={190}
        className='rounded-full h-[190px] w-[190px] object-cover'
      />

      <div className='flex flex-col sm:flex-row w-full gap-5 sm:justify-between items-center sm:items-start'>
        {/* Left Info Section */}
        <div className='flex flex-col items-center sm:items-start gap-2 mt-2 text-center sm:text-left'>
          <h2 className='text-red-500 bg-red-100 rounded-full p-1 px-3 text-sm sm:text-base'>
            {business?.category?.name}
          </h2>
          <h2 className='text-xl sm:text-[28px] font-bold'>{business.name}</h2>
          <h2 className='flex items-center gap-2 text-sm sm:text-base text-gray-500 justify-center sm:justify-start'>
            <MapPin /> {business.address}
          </h2>
          <h2 className='flex items-center gap-2 text-sm sm:text-base text-gray-500 justify-center sm:justify-start'>
            <Mail /> {business.email}
          </h2>
        </div>

        {/* Right Action Section */}
        <div className='flex flex-col items-center sm:items-end gap-4'>
          <Button className='bg-red-500 w-fit sm:w-auto'><Share /></Button>
          <h2 className='flex items-center gap-2 text-base sm:text-lg text-red-500'>
            <User /> {business.contactPerson}
          </h2>
          <h2 className='flex items-center gap-2 text-base sm:text-lg text-gray-500'>
            <Clock /> Available 10:00 AM to 07:00 PM
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
