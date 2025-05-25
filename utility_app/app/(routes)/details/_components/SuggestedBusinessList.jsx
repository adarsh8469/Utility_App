import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button';
import { NotebookPen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import BookingSection from './BookingSection';


function SuggestedBusinessList({ business }) {
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (business?.category?.name) {
      getBusinessList();
    }
  }, [business]);

  const getBusinessList = () => {
    setLoading(true);
    GlobalApi.getBusinessByCategory(business?.category?.name).then((resp) => {
      setBusinessList(resp?.businessLists || []);
      setLoading(false);
    });
  };

  return (
    <div className='pl-0 md:pl-5'>
      <BookingSection business = {business}>
        <Button
        className='bg-red-500 hover:bg-red-600 active:scale-95 active:bg-red-700 transition duration-150 ease-in-out flex items-center gap-2 w-full 
                text-white text-base sm:text-lg rounded-full h-11 mb-5'>
        <NotebookPen className='w-5 h-5' />
        Book Appointment
      </Button>
      </BookingSection>
      <h2 className='font-bold text-lg mb-3'>Similar Business</h2>

      {loading ? (
        // Simple shimmer/loading UI
        <div className='space-y-4'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='flex gap-3 animate-pulse items-center p-3 rounded-lg border'>
              <div className='bg-gray-300 rounded-md w-[70px] h-[70px]' />
              <div className='space-y-2 flex-1'>
                <div className='bg-gray-300 h-4 w-3/4 rounded'></div>
                <div className='bg-gray-300 h-3 w-1/2 rounded'></div>
                <div className='bg-gray-300 h-3 w-2/3 rounded'></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='space-y-4'>
          {businessList.map((business, index) => (
            <Link key={index} href={`/details/${business.id}`} className='flex gap-3 items-center p-3 rounded-lg border hover:shadow-md transition'>
              <Image
                src={business?.images[0]?.url}
                alt={business.name}
                width={70}
                height={70}
                className='rounded-md object-cover w-[70px] h-[70px]'
              />
              <div className='text-sm'>
                <h3 className='font-semibold'>{business.name}</h3>
                <p className='text-red-500'>{business.contactPerson}</p>
                <p className='text-gray-500'>{business.address}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SuggestedBusinessList;