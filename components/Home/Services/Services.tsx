
import BoxText from "@/components/Helper/BoxText"
import { FaBriefcase, FaChess,  FaRocket, FaShoppingCart } from "react-icons/fa"
import { IoColorPaletteOutline } from "react-icons/io5"
import { MdOutlineDesignServices } from "react-icons/md"
const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <BoxText>Our Services</BoxText>
        {/* heading */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">Our Services Made For You?</h1>
        {/* Description */}
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum vel nostrum reprehenderit laboriosam eos eaque ex debitis quam numquam.
        </p>
        {/* started Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
          {/* First Box */}
          <div data-aos="fade-right"  className="flex flex-row items-center gap-5 ">
            {/* icon */}
            <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center bg-opacity-30">
              <FaRocket className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-lg font-bold">Start Up</h1>
              <p className="text-sm text-gray-600 font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 2nd First Box */}
          <div data-aos="fade-right" className="flex flex-row items-center gap-5 ">
            {/* icon */}
            <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center bg-opacity-30">
              <FaBriefcase className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-lg font-bold">Business</h1>
              <p className="text-sm text-gray-600 font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 3rd First Box */}
          <div data-aos="fade-right" className="flex flex-row items-center gap-5">
            {/* icon */}
            <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center bg-opacity-30">
              <FaShoppingCart className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-lg font-bold">E-commerce</h1>
              <p className="text-sm text-gray-600 font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 4th First Box */}
          <div data-aos="fade-right" className="flex flex-row items-center gap-5 ">
            {/* icon */}
            <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center bg-opacity-30">
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-lg font-bold">Digital Design</h1>
              <p className="text-sm text-gray-600 font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 5th First Box */}
          <div data-aos="fade-right" className="flex flex-row items-center gap-5 ">
            {/* icon */}
            <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center bg-opacity-30">
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-lg font-bold">Start Up</h1>
              <p className="text-sm text-gray-600 font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* First Box */}
          <div data-aos="fade-right" className="flex flex-row items-center gap-5 ">
            {/* icon */}
            <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center bg-opacity-30">
              <FaChess className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-lg font-bold">Strategy Solution</h1>
              <p className="text-sm text-gray-600 font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
