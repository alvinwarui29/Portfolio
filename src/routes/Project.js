import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroimg/HeroImage'
import Navbar from '../components/navbar/Navbar'
import PricingCard from '../components/pricingCard/PricingCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading = "PROJECTS" text="These are my projects"/>
      <PricingCard/>

      <Footer/>
    </div>
  )
}

export default Project