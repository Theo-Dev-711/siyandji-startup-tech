"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from './Feature/Feature'
import About from './About/About'
import Services from './Services/Services'
import ClientReviews from './ClientReviews/ClientReviews'
import Team from './Team/Team'
import Pricing from './Pricing/Pricing'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    const initAos = async () => {
      await import ("aos");
      AOS.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  })
  return (
    <div className=''>
     <Hero/>
     <About/>
     <Feature/>
     <Services/>
     <ClientReviews/>
     <Team/>
     <Pricing/>
    </div>
  )
}

export default Home
