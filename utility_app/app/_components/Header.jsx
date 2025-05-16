"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {

    const { data } = useSession();
    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div className="p-6 mt-4 rounded-md shadow-md flex justify-between">
            <div className="flex items-center gap-8">
                <Image className="pl-3" src="/logo.svg" alt="Intelli Grid" width={200} height={115} priority />
                <div className="md:flex items-center gap-6 cursor-pointer hidden text-[17px]">
                    <h2 className="hover:scale-105 font-semibold transition duration-200">Home</h2>
                    <h2 className="hover:scale-105 font-semibold transition duration-200">Services</h2>
                    <h2 className="hover:scale-105 font-semibold transition duration-200">Explore</h2>
                    <h2 className="hover:scale-105 text-[#e42b50f1] font-semibold transition duration-200">Subscription</h2>
                    <h2 className="hover:scale-105 font-semibold transition duration-200">About us</h2>
                </div>
            </div>
            <div className="pr-5">
                {data?.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image
                                src={data.user.image || "/default-avatar.png"}
                                width={40}
                                height={40}
                                alt="User avatar"
                                className="rounded-full"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>My Booking</DropdownMenuItem>
                            <DropdownMenuItem className={"text-red-600"}>Subscription Plan</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                ) : (
                    <Button
                        onClick={() => signIn('descope')}
                        className="!bg-[#e42b50f1] hover:!bg-[#e42b50f1] font-semibold transition transform active:scale-95 text-white px-4 py-2 rounded ease-in-out"
                    >
                        Login / Sign up
                    </Button>
                )}

            </div>
        </div>
    );
}

export default Header;