"use client";
import React, {useEffect, useState} from 'react'
import { FaArrowUp } from 'react-icons/fa';


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ToggleVisibility = ()=>{

            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        };

        addEventListener('scroll', ToggleVisibility);
        return ()=> removeEventListener('scroll', ToggleVisibility);
        
    }, [])

    const ScrollToTop = () => {
        window.scrollTo({
            top:5,
            behavior: 'smooth'
        });
    }
        
    
  return (
    <div className='fixed bottom-4 animate-bounce right-4'>
        {isVisible &&(
            <button onClick={ScrollToTop} className='bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center'>
                <FaArrowUp/>
            </button>
        )}
      
    </div>
  )
}

export default ScrollTop
