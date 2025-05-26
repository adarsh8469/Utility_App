import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BookingHistoryList({ bookingHistory }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6">
      {bookingHistory.map((booking, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 border rounded-lg p-4 shadow-md hover:border-red-400 transition cursor-pointer"
        >
          {booking?.businessList?.name && (
            <Image
              src={booking?.businessList?.images[0]?.url}
              alt="Service"
              width={140}
              height={140}
              className="rounded-lg object-cover w-full md:w-[140px] h-auto md:h-[140px]"
            />
          )}

          <div className="flex flex-col gap-2 mt-2 md:mt-0">
            <h2 className="font-bold text-lg md:text-xl">{booking.businessList.name}</h2>

            <h2 className="flex items-center gap-2 text-red-500 text-sm md:text-base">
              <User className="w-4 h-4" />
              {booking.businessList.contactPerson}
            </h2>

            <h2 className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
              <MapPin className="text-red-500 w-4 h-4 mt-1" />
              <span>{booking.businessList.address}</span>
            </h2>

            <h2 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
              <Calendar className="text-red-500 w-4 h-4" />
              <span>
                Service Date:{' '}
                <span className="text-black font-medium">{booking.date}</span>
              </span>
            </h2>

            <h2 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
              <Clock className="text-red-500 w-4 h-4" />
              <span>
                Service Time:{' '}
                <span className="text-black font-medium">{booking.time}</span>
              </span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookingHistoryList