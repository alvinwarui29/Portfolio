import "./PricingCard.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-- Basic --</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>-3days-</p>
                <p>-3pages-</p>
                <p>-featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
     </div>
  )
}

export default PricingCard