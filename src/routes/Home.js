import React from 'react'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import PricingCard from '../components/pricingCard/PricingCard'
import WorkCard from '../components/workcard/WorkCard'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkCard/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Home