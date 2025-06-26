import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
      <h1 className='text-center text-blue-950 text-2xl font-bold'>Choose The Plan That&apos;s Right For You</h1>
      <p className='mt-3 w-[90%] mx-auto text-center sm:w-[70%] md:w-[50%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam pariatur commodi maiores consequuntur a.</p>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {/* main Grid */}

        {/* First Grid */}
        <div data-aos="fade-up" data-aos-delay="100" >
          <PricingCard title="3 Month Membership"
         description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque"
          price="$39.99"
        />
        </div>
        {/* 2nd Grid */}
        <div data-aos="fade-up" data-aos-delay="150" >
          <PricingCard title="12 Month Membership"
         description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque"
          price="$19.99"
        />
        </div>
        {/* 3rd Grid */}
        <div data-aos="fade-up" data-aos-delay="200" >
          <PricingCard title="Life time Membership"
         description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque"
          price="$9.99"
        />
        </div>
        


      </div>

      
    </div>
  )
}

export default Pricing
