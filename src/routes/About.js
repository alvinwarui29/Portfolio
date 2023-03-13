import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroimg/HeroImage'
import Navbar from '../components/navbar/Navbar'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading = "ABOUT" text="This is about me" />
      <Footer/>
    </div>
  )
}

export default About