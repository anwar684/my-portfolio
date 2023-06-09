import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'

type Props = {
    job:string,
    org: string,
    date: string,
    description: string,
}

export default function Experience(props: Props) {
  return (
    <section className='flex flex-col'>
        <div className='text-white flex lg:flex-row flex-col m-2 items-center '>
            <div className='font-inter font-semibold lg:font-bold lg:text-lg mx-2'>{props.job}</div>
            <div className=' hidden lg:flex'>-</div>
            <div className=' font-arial font-normal lg:text-lg mx-2'>{props.org}</div>
        </div>
        <div className='flex lg:mt-2 items-center justify-center lg:justify-start'>
            <div className='lg:mx-2 mr-2'>
            <Image
            className=" lg:mx-2"
            src="/image/calender.svg"
            alt="Calendar"
            width={15}
            height={15}
            priority
            />
            </div>
            <div className='text-gray-500 text-sm'>{props.date}</div>
        </div>
        <div className=' text-white font-inter m-3 text-center lg:text-start '>{props.description}</div>
        <div className='flex justify-center lg:justify-start'>
        <hr className="border-t-2 w-48 border-amber-600 mt-6 mb-3 ml-2 "></hr>
        </div>
        
    </section>
  )
}