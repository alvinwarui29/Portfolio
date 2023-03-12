import "./Footer.css"

import React from 'react'
import  {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

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
            <div className="right">
                <h4>About Myself</h4>
                <p>This is alvin warui. A very passionate react student.
                Get in touch with me via the above availed details.
                 </p>
                 <div className="Social">
                 <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                 <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                 <FaInstagram size={20} style={{color:"#fff",marginRight:"1rem"}}/>


                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer