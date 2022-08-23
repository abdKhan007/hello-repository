import React, {useState} from 'react'
// import Css
import './coders.css'
// import Images
import img1 from '../../images/codes-img/img1.svg'
import img2 from '../../images/codes-img/img1.png'
// import Icons
import { AiFillCaretDown } from 'react-icons/ai'
// import Link
import { Link } from 'react-router-dom'


const Codes = () => {

    
    const [show,setShow] = useState(false)

  return (
    <div className='codes'>
        <div className="container codes-box">
            <div className="left-codes">
                <h1 className='title-left'>A full suite of PDF modification <br /> tools at your service</h1>
                <p className='defs'>Want to take a look around? Get started today <br /> with our collection of libraries and complete <br /> documentation.</p>
                <div className="btns-codes">
                    <Link to='/' className='guid'>
                        <img src={img1} alt="" className='img-coders' />
                        Guides
                    </Link>
                    <Link to="/" className='api'>API Reference</Link>
                </div>
            </div>
            <div className="right-codes">
                <div className="top-rigt">
                    <p>Compress example</p>
                    <div className="onlivk">
                        <p className='php' onClick={()=>setShow(!show)}>php <AiFillCaretDown/></p>
                        {
                            show?<div className="disnone">
                                <p>PHP</p>
                                <p>Net</p>
                                <p>Ruby</p>
                                <p>Node js</p>
                            </div>:null
                        }   
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="aal-img"> 
                        <img src={img2} alt="" />
                    </div>
                    <div className="git-hub">
                        <Link to="/" className='git'>Download the library from GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Codes