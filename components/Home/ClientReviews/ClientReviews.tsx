import React from 'react'
import ClientReviewsCard from './ClientReviewsCard'

const ClientReviews = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <h1 className="mt-4 text-2xl  font-bold text-gray-800 text-center ">What Our Happy Client Says</h1>
        {/* Description */}
        <p className="mt-3 w-[90%] sm:w-[70%] md:w-[50%]  mx-auto text-gray-700 font-medium text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam pariatur commodi maiores consequuntur a.
        </p> 
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
            <div data-aos="zoom-in">
                <ClientReviewsCard 
                image="/images/u1.jpg"
                name="Jasica Doe"
                rating="4.5"
            />
            </div>
            <div data-aos="zoom-in">
                <ClientReviewsCard 
                image="/images/u2.jpg"
                name="Jhon Doe"
                rating="4.7"
            />
            </div>
            <div data-aos="zoom-in">
                <ClientReviewsCard 
                image="/images/u3.jpg"
                name="Sasuke Uchiha"
                rating="4.3"
            />
            </div>
            <div data-aos="zoom-in">
                <ClientReviewsCard 
                image="/images/u4.jpg"
                name="Boruto Uzumaki"
                rating="4.9"
            />
            </div>
            
        </div>
    </div>
  )
}

export default ClientReviews
