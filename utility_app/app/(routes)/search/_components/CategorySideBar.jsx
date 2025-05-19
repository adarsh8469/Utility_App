"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

function CategorySideBar() {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const params = usePathname();
    useEffect(() => {
        getCategoryList();
    }, []);

    useEffect(() => {
        params && setSelectedCategory(params.split('/')[2]);
    }, [params])

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.categories);
        });
    };

    return (
        <div>
            <h2 className='font-bold mb-3 text-xl sm:text-2xl text-red-500'>Categories</h2>
            <div>
                {categoryList.map((category, index) => (
                    <Link href={'/search/'+category.name}
                        key={index}
                        className={`flex flex-wrap gap-2 p-3 border rounded-lg mb-3 md:mr-10 items-center 
                            text-base sm:text-lg cursor-pointer hover:bg-red-50 hover:shadow-lg 
                            hover:text-red-500 hover:border-red-400 w-full max-w-full
                            ${selectedCategory == category.name && `border-red-500 shadow-md text-red-500 bg-red-50 font-bold`}`}
                    >
                        <Image
                            src={category.icon.url}
                            alt='images'
                            width={32}
                            height={32}
                            className="shrink-0"
                        />
                        <h2 className='pl-2 break-words whitespace-normal'>
                            {category.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategorySideBar;
