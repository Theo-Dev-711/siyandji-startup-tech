import React from 'react'

type Props ={
    title: string;
    description: string;
    price: string;
};

const PricingCard = ({title, description, price}:Props) => {
  return (
    <div className='mt-10'>
      <div className='relative overflow-hidden rounded-xl'>
        <div className='flex flex-col bg-white p-8 relative overflow-hidden'>
            <h1 className='text-xl font-bold text-blue-600 '>{title}</h1>
            <p className='mt-5 text-gray-700 font-medium'>{description}</p>
            <h1 className='mt-8 text-4xl font-bold'>{price} <span className='text-[18px] text-gray-700 font-medium'>/ Month</span></h1>
            {/* Buttom */}
            <div className='mt-16'>
                <a href="#_" className="px-10 py-3  font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                    Upgrade Now
                </a>
            </div>
            

        </div>
        <div className='h-[5px] w-full absolute top-0 bg-rose-300  '></div>

      </div>
    </div>
  )
}

export default PricingCard
