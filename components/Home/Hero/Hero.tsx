import Image from 'next/image';
import { BsStarHalf } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const Hero = () => {

  return (
    <div className="relative w-full h-[110vh] max-sm:h-[70vh] justify-center    flex  flex-col bg-[url('/images/bg.png')] bg-center bg-cover">
      <div className="w-[90%] md:w-[80%] mx-auto items-center max-sm:mt-[15rem]  grid grid-col xl:grid-cols-2 gap-10 ">
        {/* Text content */}
        <div data-aos="fade-up" className="">
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Make The Smartest Investment
          </p>
          <h1 className="text-2xl mb-6  md:text-3xl lg:text-4xl font-bold leading-[2.5rem] md:leading-[3.5rem] text-blue-950 mt-6">Kickstart, Scale, And Thrive Faster With{" "} <span className="text-rose-700">TechDev</span></h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sit nostrum laudantium minus fugiat quisquam ipsum praesentium eveniet dignissimos iusto!</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            {/* section1 */}
            <div className="flex flex-row items-center gap-5 ">
              <Image src="/images/google.png" alt="google" width={40} height={40}/>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center gap-1'>
                  <p className='text-lg sm:text-xl md:text-xl font-bold  text-gray-700'>4.5</p> 
                  <div className='flex items-center '>
                   <FaStar className="text-yellow-400" />
                   <FaStar className="text-yellow-400" />
                   <FaStar className="text-yellow-400 ml-1" />
                   <FaStar className="text-yellow-400" />
                   <BsStarHalf className="text-yellow-400"/>
                  </div>
                </div>
                <p className='text-gray-700 text-sm sm:text-base'>Best Rated On Google</p>
              </div>
            </div>
            {/* section2 */}
            <div className="flex flex-row items-center gap-5 mt-5 max-sm:mt-16">
              <Image src="/images/linkedin.png" alt="linkedin" width={40} height={40}/>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center gap-1'>
                  <p className='text-lg sm:text-xl md:text-xl font-bold  text-gray-700'>4.5</p> 
                  <div className='flex items-center '>
                   <FaStar className="text-yellow-400" />
                   <FaStar className="text-yellow-400" />
                   <FaStar className="text-yellow-400 ml-1" />
                   <FaStar className="text-yellow-400" />
                   <BsStarHalf className="text-yellow-400"/>
                  </div>
                </div>
                <p className='text-gray-700 text-sm sm:text-base'>Best Rated On Linkedin</p>
              </div>
            </div>
          </div>
          <div className='max-md:flex-col flex items-start flex-row gap-5 mt-5'>
            {/* button 1 */}
            <a href="#_" className=" px-10 py-3 font-medium text-white transition duration-300 bg-rose-600 rounded-md hover:bg-rose-800 ease">
              
              <span className="">Get Free Trail</span>
            </a>
            {/* button 2 */}
            <a href="#_" className="px-8 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
              <span className="">Create Account</span>
            </a>
          </div>
        </div>
        {/* image Content */}
        <div data-aos="fade-down" className='mx-auto hidden xl:block '>
          <Image src="/images/hero.jpg" alt="hero" width={900} height={900}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
