import React from "react";
// import Css
import "./awef.css";
// import Images
import img1 from "../../images/chek-img/check.svg";


const Awef = () => {
  return (
    <div className="awef">
      <div className="container awef-box">
        <div className="left-awef">
          <h1>
            A few reasons to integrate <br /> iLovePDF API
          </h1>
          <p>
            Millions of people trust iLovePDF to process their <br />
            documents. They chose to solve all their PDF <br /> problems in one
            place using our best-in-class <br /> tools.
          </p>
          <p>
            Now you have full access to those same tools <br /> and
            infrastructure, built to scale.
          </p>
        </div>
        <div className="right-awef">
          <div className="line-1">
            <img src={img1} alt="" />
            <div className="h345">
              <h3>Make project development easy with PDF libraries</h3>
            </div>
          </div>
          <div className="line-1">
            <img src={img1} alt="" />
            <div className="h345">
              <h3>Automate heavy PDF tasks with dedicated servers</h3>
            </div>
          </div>
          <div className="line-1">
            <img src={img1} alt="" />
            <div className="h345">
              <h3>Process PDF data privately and securely</h3>
            </div>
          </div>
          <div className="line-1">
            <img src={img1} alt="" />
            <div className="h345">
              <h3>
                Rely on high quality PDF technology powered by PDF Tools AG
              </h3>
            </div>
          </div>
          <div className="line-1">
            <img src={img1} alt="" />
            <div className="h344">
              <h3>Your pricing plan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awef;
