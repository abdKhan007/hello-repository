import React from 'react'
// import Css
import './navbar.css'
// import Images
import logo from '../../images/navbar-img/logo.png'
// import Link
import { Link } from 'react-router-dom'
// import Icons
import { AiFillCaretDown, AiOutlineMenu } from 'react-icons/ai'
import  { IoPeopleCircleSharp } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container navbar-box">
        <div className="left-navbar">
            <Link to='/' className="logo">
                <img src={logo} alt="" />
            </Link>
            <div className="medias">
              <Link to='/' className='menu-icon'><AiOutlineMenu/></Link>
            <div className="links">
              <div className="pro">
                <Link to='/' className="link">Products <AiFillCaretDown className='icons-nav'/></Link>
                <div className="dnb">
                  <Link to='/'>PDF TOOLS</Link>
                  <Link to='/'>E-SIGNATURE</Link>
                </div>
              </div>
                <Link to='/' className="link">Features</Link>
                <Link to='/' className="link">Pricing</Link>
                <Link to='/' className="link">Api Reference</Link>
                <div className="pro">
                  <Link to='/' className="link">GUIDES <AiFillCaretDown className='icons-nav'/></Link>
                  <div className="dnb">
                    <Link to='/'>PDF TOOLS</Link>
                    <Link to='/'>E-SIGNATURE</Link>
                  </div>
              </div>
                <Link to='/' className="link">Contact</Link>
            </div>
            </div>
    
        </div>
        <div className="all-logi">
          <Link to='/' className='people'><IoPeopleCircleSharp/></Link>
          <div className="right-navbar">
              <Link to='/' className='loggin'>Log in</Link>
              <Link to='/' className='siggn'>Sing up</Link>
          </div>  
        </div>
      

      </div>  
    </div>
  )
}

export default Navbar
