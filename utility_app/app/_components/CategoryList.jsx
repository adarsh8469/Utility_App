import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function CategoryList({ categoryList }) {
  return (
    <div className='mt-10 mx-4 md:mx-20 lg:mx-52 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8'>
      {categoryList.length > 0 ? (
        categoryList.map((category) => (
          <Link href={'/search/'+category.name}
            className='flex flex-col items-center justify-center gap-3 bg-red-100 p-4 sm:p-6 rounded-lg border border-red-100 cursor-pointer hover:scale-110 transition-all ease-in-out'
            key={category.id}
          >
            <Image
              src={category.icon.url}
              alt='image'
              width={62}
              height={62}
            />
            <h2 className='text-sm sm:text-base font-semibold text-center'>
              {category.name}
            </h2>
          </Link>
        ))
      ) : (
        [1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            className='h-[120px] w-full bg-slate-200 animate-pulse rounded-lg'
            key={index}
          ></div>
        ))
      )}
    </div>
  );
}

export default CategoryList;