import "./Footer.css"

import React from 'react'
import  {FaHome, FaMailBulk, FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>123 Waitima</p>
                    <p>Othaya</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                011 234 546</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               ask@gmail.com</h4>
            </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer