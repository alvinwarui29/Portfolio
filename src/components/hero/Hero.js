import "./Hero.css"
import React from 'react'
import intro from "./../../assets/intro.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={intro} alt="intro Image" />
        </div>
        <div className="content">
          <p>Hello, I'm interested in freelancing</p>
          <h1>I'm a react developer</h1>
           <div >
          <Link className="btn" to="/project">Projects</Link>
          <Link className="btn btn-light" to="/project">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Hero