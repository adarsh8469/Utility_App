import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import moment from 'moment/moment';

function BookingSection({ children, business }) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const [BookedSlot, setBookedSlot] = useState([]);
    const {data} = useSession();

    useEffect(() => {
        getTime()
    }, []);

    useEffect(() => {
        date && BusinessBookedSlot();
    }, [date])

    const BusinessBookedSlot = () => {
        GlobalApi.BusinessBookedSlot(business?.id, moment(date).format('DD-MMM-yyyy')).then(resp => {
            console.log(resp);
            setBookedSlot(resp.bookings)
        })
    }

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList)
      }
      const saveBooking = () => {
        GlobalApi.CreateNewBooking(business.id, moment(date).format('DD-MMM-yyyy'), selectedTime, data.user.email, data.user.email).then(resp => {
            console.log(resp);
            if(resp){
                // Done
                setDate();
                setSelectedTime('');
                toast('Service Booked Successfully!!')
            }
        }, (e) => {
            // Error
            toast('Something went wrong!!')
        })
      }

      const isSlotBooked = (time) => {
        return BookedSlot.find(item => item.time == time)
      }

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Book an Service</SheetTitle>
                        <SheetDescription>
                            Select Date and Time slot to book an appointment for your Home Service.
                            {/* Date Picker */}
                            <div className='flex flex-col gap-5 items-baseline'>
                                <h2 className='mt-5 font-bold'>Select Date</h2>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                    classNames={{
                                        day_selected: "bg-red-500 text-white hover:bg-red-600 hover:text-white hover:font-bold",
                                    }}
                                />
                            </div>
                            
                            {/* Time Slot Picker */}
                            <h2 className='my-5 font-bold'>Select Time Slot</h2>
                            <div className='grid grid-cols-3 gap-3'>
                                {timeSlot.map((item, index) => (
                                    <Button key={index} variant='outline' disabled = {isSlotBooked(item.time)}
                                    className={`border rounded-full p-2 px-3 hover:text-white 
                                    hover:bg-red-500 ${selectedTime == item.time && 'bg-red-500 text-white'}`} onClick={() => setSelectedTime(item.time)}>
                                        {item.time}</Button>
                                ))}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter className="mt-1">
                    <SheetClose asChild>
                        <div className='flex gap-5'>
                            <Button 
                            className='bg-green-500 hover:bg-green-500 hover:font-bold' 
                            disabled = {!(selectedTime && date)} onClick = {() => saveBooking()}>Book Slot</Button>
                            <Button variant='destructive' type="submit" className='hover:font-bold'>Cancel</Button>
                        </div>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default BookingSection