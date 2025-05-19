"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
import { Menu, X } from 'lucide-react';

function Header() {
    const { data } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="p-4 mt-4 rounded-md shadow-md">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* Logo wrapped with Link to home */}
                    <Link href="/" className="pl-3 sm:pl-0">
                        <Image
                            src="/logo.svg"
                            alt="Intelli Grid"
                            width={160}
                            height={80}
                            priority
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-6 cursor-pointer text-[17px]">
                        <h2 className="hover:scale-105 font-semibold transition duration-200"><Link href="/" className="pl-3 sm:pl-0">Home</Link></h2>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Services</h2>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Explore</h2>
                        <h2 className="hover:scale-105 text-[#e42b50f1] font-semibold transition duration-200">Subscription</h2>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">About us</h2>
                    </div>
                </div>

                <div className="md:hidden">
                    <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                <div className="hidden md:flex items-center">
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
                                <DropdownMenuItem className="text-red-600">Subscription Plan</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button
                            onClick={() => signIn('descope')}
                            className="!bg-[#e42b50f1] hover:!bg-[#e42b50f1] font-semibold text-white px-4 py-2 rounded"
                        >
                            Login / Sign up
                        </Button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-center text-[17px]">
                    <h2 className="hover:scale-105 font-semibold transition duration-200">Home</h2>
                    <h2 className="hover:scale-105 font-semibold transition duration-200">Services</h2>
                    <h2 className="hover:scale-105 font-semibold transition duration-200">Explore</h2>
                    <h2 className="hover:scale-105 text-[#e42b50f1] font-semibold transition duration-200">Subscription</h2>
                    <h2 className="hover:scale-105 font-semibold transition duration-200">About us</h2>
                    {data?.user ? (
                        <>
                            <hr />
                            <h2 className="font-semibold">My Booking</h2>
                            <h2 className="font-semibold text-red-600">Subscription Plan</h2>
                            <Button variant="ghost" onClick={() => signOut()}>Log out</Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => signIn('descope')}
                            className="!bg-[#e42b50f1] hover:!bg-[#e42b50f1] font-semibold text-white px-4 py-2 rounded"
                        >
                            Login / Sign up
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Header;