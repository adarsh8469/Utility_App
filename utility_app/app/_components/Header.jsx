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

    useEffect(() => {}, [data]);

    return (
        <div className="p-4 mt-4 rounded-md shadow-xl border border-gray-200 bg-white z-50">
            <div className="flex justify-between items-center">
                {/* Left: Logo and Links */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="pl-3 sm:pl-0">
                        <Image
                            src="/logo.svg"
                            alt="Intelli Grid"
                            width={160}
                            height={80}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-6 cursor-pointer text-[17px]">
                        <Link href="/"><h2 className="hover:scale-105 font-semibold transition duration-200">Home</h2></Link>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Services</h2>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Explore</h2>
                        <Link href="/SubscriptionPlans"><h2 className="hover:scale-105 text-[#e42b50f1] font-semibold transition duration-200">Subscription</h2></Link>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">About us</h2>
                    </div>
                </div>

                {/* Right: Auth Section */}
                <div className="md:hidden flex items-center gap-3">
                    {!data?.user && (
                        <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    )}

                    {data?.user && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Image
                                    src={data.user.image || "/default-avatar.png"}
                                    width={40}
                                    height={40}
                                    alt="User avatar"
                                    className="rounded-full cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-2">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>My Booking</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600"><Link href="/SubscriptionPlans">Subscription Plan</Link></DropdownMenuItem>
                                <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>

                {/* Desktop Avatar or Login */}
                <div className="hidden md:flex items-center">
                    {data?.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Image
                                    src={data.user.image || "/default-avatar.png"}
                                    width={40}
                                    height={40}
                                    alt="User avatar"
                                    className="rounded-full cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>My Booking</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600"><Link href="/SubscriptionPlans">Subscription Plan</Link></DropdownMenuItem>
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

            {/* Mobile Nav Menu */}
            {menuOpen && !data?.user && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-center text-[17px]">
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Home</h2>
                    </Link>
                    <Link href="/services" onClick={() => setMenuOpen(false)}>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Services</h2>
                    </Link>
                    <Link href="/explore" onClick={() => setMenuOpen(false)}>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">Explore</h2>
                    </Link>
                    <Link href="/SubscriptionPlans" onClick={() => setMenuOpen(false)}>
                        <h2 className="hover:scale-105 text-[#e42b50f1] font-semibold transition duration-200">Subscription</h2>
                    </Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>
                        <h2 className="hover:scale-105 font-semibold transition duration-200">About us</h2>
                    </Link>

                    <Button
                        onClick={() => {
                            signIn('descope')
                            setMenuOpen(false)
                        }}
                        className="!bg-[#e42b50f1] hover:!bg-[#e42b50f1] font-semibold text-white px-4 py-2 rounded"
                    >
                        Login / Sign up
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Header;
