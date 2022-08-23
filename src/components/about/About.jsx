import React from 'react';
// import Css
import './about.css'
// import Images
import img1 from '../../images/about-img/img1.svg'
import img2 from '../../images/about-img/img2.svg'
import img3 from '../../images/about-img/img3.svg'
import img4 from '../../images/about-img/img4.svg'



// fake data

const data = [
    {
        id: 1,
        title: 'Built to scale',
        img: img1,
        description: 'Strong infrastructure to offer the best dedicated processing power.'
    },
    {
        id: 2,
        title: 'We know how to process PDF',
        img: img2,
        description: 'You might know us from ilovepdf.com where we process millions of PDFs daily.'
    },
    {
        id: 3,
        title: 'Easy to develop',
        img: img3,
        description: 'We offer a simple and concise API Reference and Guide as well as API'
    },
    {
        id: 4,
        title: 'Powered by PDF Tools AG',
        img: img4,
        description: 'Our infrastructure uses the best PDF technology for processing PDF files.'
    },

]

const About = () => {
  return (
    <div className='about'>
        <div className="container about-box">
            <div className="main-about">
                {
                    data.map(item=>(
                        <div className="all-about" key={item.id}>
                            <div className="img-about">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="titles-about">
                                <h3>{item.title}</h3>
                                <p className='def'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About