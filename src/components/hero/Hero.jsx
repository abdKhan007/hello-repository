import React from 'react'
// import Css
import './hero.css'
// import Link
import { Link } from 'react-router-dom'

// import Images


const Hero = () => {
  return (
    <div className='hero'>
        <div className="container hero-box">
            <div className="left-hero">
                <div className="title-hero">
                    <h1>Our PDF tools in a REST API for <br /> developers</h1>
                    <p>Whether you are a small startup or a large business,<br /> iLovePDF API is here to help you automate document <br /> </p>
                </div>
                <div className="btns-hero">
                    <Link to="/">PHP </Link>
                    <Link to="/">- .NET</Link>
                    <Link to="/">- RUBY </Link>
                    <Link to="/">- NODE.JS</Link>
                    <Link to="/">- API REFERENCE</Link>
                </div>
                <div className="main-btn-hero">
                   <Link to='/'>Get started</Link> 
                </div>
            </div>
            <div className="right-hero">
                
            </div>
        </div>
    </div>
  )
}

export default Hero
