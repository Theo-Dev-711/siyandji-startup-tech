import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';

type Props ={
    image:string;
    name:string;
    rating: string;
};

const ClientReviewsCard = ({image, name, rating}: Props) => {
  return (
    <div className='bg-white shadow-md  items-center p-8 rounded-lg'>
      <div className='flex flex-row max-sm:flex-col  gap-10'>
        {/* image */}
        <div className=''>
            <Image src={image} alt={name} width={350} height={350} className='rounded-lg'/>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-lg text-blue-950 font-bold'>{name}</h1>
            <div className='flex items-center gap-2'>
                <h1 className='text-2xl font-bold text-orange-500'>{rating}</h1>
                <div className='flex'>
                    <FaStar className="text-yellow-600" />
                    <FaStar className="text-yellow-600" />
                    <FaStar className="text-yellow-600" />
                    <FaStar className="text-yellow-600" />
                    <BsStarHalf className="text-yellow-600"/>
                </div>
            </div>
            <p className='text-base mt-3 text-gray-700 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum recusandae sint quisquam ullam quo.</p>
        </div>
      </div>
    </div>
  )
}

export default ClientReviewsCard
