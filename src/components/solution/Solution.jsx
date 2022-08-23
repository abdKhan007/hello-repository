import React from 'react'
// import Css
import './solution.css'
// import Images
import img1 from '../../images/solution-img/img1.svg'
import img2 from '../../images/solution-img/img2.svg'
import img3 from '../../images/solution-img/img3.svg'
import img4 from '../../images/solution-img/img4.svg'
import img5 from '../../images/solution-img/img5.svg'
import img6 from '../../images/solution-img/img6.svg'
// import icons

// fake data

const Base = [
    {
        id: 1,
        img: img1,
        title: 'Organize PDF',
        bg: 'var(--first)',
        dexr: 'Merge and split documents with a variety of custom options. Remove, extract or organize PDF pages as you need.'
    },
    {
        id: 2,
        img: img2,
        title: 'Compress PDF',
        bg: 'var(--second)',
        dexr: 'Reduce the size of your PDF while maintaining its original quality and formatting.'
    },
    {
        id: 3,
        img: img3,
        title: 'Convert to PDF',
        bg: 'var(--uch)',
        dexr: 'Easily convert Images, MS Word, PowerPoint and Excel files into non-editable PDF documents.'
    },
    {
        id: 4,
        img: img4,
        title: 'Convert from PDF',
        bg: 'var(--tor)',
        dexr: 'Convert PDF documents to JPG images or to PDF/A format.'
    },
    {
        id: 5,
        img: img5,
        title: 'Edit PDF',
        bg: 'var(--besh)',
        dexr: 'Rotate, add page numbers and watermarks to PDF. Customize PDFs with annotations and drawings.'
    },
    {
        id: 6,
        img: img6,
        title: 'PDF Security',
        bg: 'var(--olti)',
        dexr: 'Encrypt PDFs with a password to prevent unauthorized access to the file content or remove passwords from protected documents.'
    },

]

const Solution = () => {
  return (
    <div className='solution'>
        <div className="container solution-box">
            <div className="title-solution">
                <h1>Start building solutions that convert, optimize and organize PDFs</h1>
            </div>
            <div className="fds">
                <div className="main-solution">
                    {
                        Base.map(item=>(
                            <div className="all-solution" style={{background: `${item.bg}`}} key={item.id}>
                                <div className="sol-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <h3 className='title-soll'>{item.title}</h3>
                                <p className='decr'>{item.dexr}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solution