import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=''>
        <div className='p-t-16 pb-16'>
            <div className='w-[80%] mx-auto gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14'>
                {/* 1st box */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Solution</h1>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Enterprise</p>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>By Work Flow</p>
                    <p className='text-sm   text-gray-800 font-medium cursor-pointer hover:text-blue-950'>By Team</p>
                    
                </div>
                {/* 2nd box */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Company</h1>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>About Us</p>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>News & Press</p>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Our Customer </p>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Leadership</p>
                    <p className='text-sm  text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Careers</p>
                    
                </div>
                {/* 3rd box */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Ressource</h1>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Blog</p>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Webinar & Events</p>
                    <p className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>Podcast</p>
                    <p className='text-sm  text-gray-800 font-medium cursor-pointer hover:text-blue-950'>E-book & Guides</p>
                    
                    
                </div>
                {/* 4th box */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Contact Us</h1>
                    <div>
                        <p className='text-sm text-gray-700  cursor-pointer '>Our Mobile Number</p>
                        <p className='text-sm text-blue-950 font-bold  '>+237 673 330 148</p>
                    </div>
                    
                    <div>
                        <p className='text-sm text-gray-700   '>Our Email</p>
                        <p className='text-sm  text-blue-950 font-bold'>juniordev711@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 w-[80%] mx-auto border-t   '>
                <div className="flex flex-col gap-y-3 md:flex-row items-center justify-between mt-10">
                    <div>
                        <p className='text-sm text-gray-700   '>Copyright © 2025 TheoDev. All rights reserved</p>
                    </div>
                
                    <div className='flex flex-row gap-2'>
                        <p className='text-sm text-gray-700'>Social :</p>
                        <div className='space-x-4 flex'>
                            <FaFacebook className='text-gray-500 hover:text-gray-800'/>
                            <FaTwitter className='text-gray-500 hover:text-gray-800'/>
                            <FaDribbble className='text-gray-500 hover:text-gray-800'/>

                        </div>
                        

                    </div>

                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Footer
