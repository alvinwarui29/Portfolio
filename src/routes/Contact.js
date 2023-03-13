import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroimg/HeroImage'
import Navbar from '../components/navbar/Navbar'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading = "CONTACT" text="Kindly Contact me"/>
      <Footer/>
    </div>
  )
}

export default Contact