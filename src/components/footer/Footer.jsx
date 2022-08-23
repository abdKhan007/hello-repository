import React from 'react'
// import Css
import './footer.css'
// import Images
import img1 from '../../images/footer-img/img1.svg'
import img2 from '../../images/footer-img/img2.svg'
import img3 from '../../images/footer-img/img3.svg'
import img4 from '../../images/copyright-img/img4.svg'
import img5 from '../../images/copyright-img/img5.svg'
// import Icons

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container footer-box">
            <div className="aling">
                <div className="top-footer">
                    <div className="line11">
                        <h3 className="h33">INFO</h3>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>API Reference</p>
                        <p>Tools Guides</p>
                        <p>Signature Guides</p>
                    </div>
                    <div className="line11">
                        <h3 className="h33">API LIBRARIES</h3>
                        <p>PHP</p>
                        <p>.Net</p>
                        <p>Ruby</p>
                        <p>Node.js</p>
                    </div>
                    <div className="line11">
                        <h3 className="h33">ABOUT</h3>
                        <p>Our Story</p>
                        <p>Go to ilovepdf.com</p>
                        <p>Go to iloveimg.com</p>
                    </div>
                    <div className="line11">
                        <h3 className="h33">SUPPORT</h3>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                        <p>Contact</p>
                        <p>Tools Guides</p>
                        <p>Signature Guides</p>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="left-bootom">
                    <h3>Tools powered by</h3>
                    <img src={img1} alt="" />
                </div>
                <div className="right-bootom">
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
            {/* copy right */}
            <div className="copyright">
                <div className="left-copy">

                </div>
                <div className="right-copy">
                    <p>© iLovePDF 2021 ® - Your PDF Editor</p>
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer