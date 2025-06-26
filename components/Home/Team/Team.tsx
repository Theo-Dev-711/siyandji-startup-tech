import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto '>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-10'>
                {/* First Box */}
                <div className=''>
                    <BoxText>Our Team</BoxText>
                    <h1 className='mt-4 text-xl md:text-2xl text-gray-800 font-bold'>Our Team of Exceptional Talent, Innovation, and Vision</h1>
                    <p className='mt-6 text-gray-700 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas quod mollitia vitae minus laborum, temporibus nostrum culpa impedit maiores</p>
                    {/* Buttom */}
                    <div className='mt-8'>
                        <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className=" right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="">Join Our Team</span>
                        </a>
                    </div>
                </div>
                {/* 2nd Box */}
                
                <div data-aos="fade-right" className=''>
                    <div className='relative overflow-hidden border-4 rounded-lg'>
                        <Image src="/images/user1.jpeg" alt="Founder" width={300} height={300} className='rounded-lg'/>
                        <div className="h-[5rem] w-[100%] bg-rose-500 absolute bottom-0 rounded-lg items-start flex flex-col p-4 ">
                            <p className='text-white text-xl font-bold'>SiYandji Youmbi Theodore</p>
                            <p className='text-sm text-white font-medium'>(Founder)</p>

                        </div>
                    </div>

                </div>
                {/* 3rd Box */}
                <div data-aos="fade-right" className=''>
                    <div className='relative overflow-hidden '>
                        <Image src="/images/t2.jpg" alt="Founder" width={600} height={600} className='rounded-lg'/>
                        <div className="h-[5rem] w-[100%] bg-orange-500 absolute bottom-0 rounded-lg items-start flex flex-col p-4 ">
                            <p className='text-white text-xl font-bold'>Jessica Doe</p>
                            <p className='text-sm text-white font-medium'>(Co-Founder)</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Team
