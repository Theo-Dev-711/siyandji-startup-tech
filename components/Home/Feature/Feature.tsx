import React from 'react'
import Image from 'next/image'
import { MdAccessAlarm, MdTouchApp } from 'react-icons/md'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'

const Feature = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div>
            <h1 className='text-center text-2xl text-blue-950 font-bold'>Key Feautures Of The Product</h1>
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                Our product stands out with its high performance, delivering blazing-fast speeds and seamless multitasking
            </p>
        </div>
        {/* main grid */}
        <div className='w-[80%] mx-auto mt-16 items-center grid grid-cols-1 gap-10 max-lg:grid-cols-1 lg:grid-cols-2'>
            {/* section1 of Grid */}
            <div  className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>
                {/* first Box */}
                <div data-aos="fade-right" className='flex flex-col bg-white p-4 rounded-lg'>
                    {/* heading */}
                    <div className='flex flex-row items-center space-x-4'>
                        {/* icons */}
                        <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 bg-opacity-20'>
                            <MdTouchApp className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* text */}
                        <h1 className='text-lg font-bold text-gray-700'>App Integration</h1>
                    </div>
                    <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
                </div>
                {/* 2nd Box */}
                <div data-aos="fade-right" className='flex flex-col bg-white p-4 rounded-lg'>
                    {/* heading */}
                    <div className='flex flex-row items-center space-x-4'>
                        {/* icons */}
                        <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 bg-opacity-20'>
                            <GoWorkflow className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* text */}
                        <h1 className='text-lg font-bold text-gray-700'>Workflow Builder</h1>
                    </div>
                    <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
                </div>
                {/* 3rd Box */}
                <div data-aos="fade-right" className='flex flex-col bg-white p-4 rounded-lg'>
                    {/* heading */}
                    <div className='flex flex-row items-center space-x-4'>
                        {/* icons */}
                        <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 bg-opacity-20'>
                            <LuPen className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* text */}
                        <h1 className='text-lg font-bold text-gray-700'>Problem Solution</h1>
                    </div>
                    <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
                </div>
                {/* 4rd Box */}
                <div data-aos="fade-right" className='flex flex-col bg-white p-4 rounded-lg'>
                    {/* heading */}
                    <div className='flex flex-row items-center space-x-4'>
                        {/* icons */}
                        <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 bg-opacity-20'>
                            <MdAccessAlarm className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* text */}
                        <h1 className='text-lg font-bold text-gray-700'>Lifetime Access</h1>
                    </div>
                    <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
                </div>
            </div>
            {/* section2 of Image */}
            <div data-aos="fade-left">
                <Image src="/images/f1.png" alt="Woman_Check" width={700} height={700}/>
            </div>

        </div>
      
    </div>
  )
}

export default Feature
