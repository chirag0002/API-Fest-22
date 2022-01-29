import React from "react";
import "../styling/Explore.css";
import tech from "../images/tech.png";
import crypto from "../images/Crypto.png";
import e from "../images/commerce.png";
import market from "../images/marketing.png";
import invest from "../images/invest.png";
import enter from "../images/enter.png";
import poetry from "../images/poet.png";
import health from "../images/health.png";

const Explore = () => {
  return (
    <div className="explore">
      <p className="explore-heading">
        WANNA EXPLORE MORE? <br />
        WHY NOT{" "}
        <a href="/po">
          <a href="/explore"><span className="explore-tunein">TUNE IN</span></a>
        </a>
      </p>
      <div className="explore-cat">
        <a className="explore-img" href=" ">
          <img className="explore-img1" src={e} alt="" />
        </a>
        <a className="explore-img" href=" ">
          <img className="explore-img2" src={crypto} alt="" />
        </a>
        <a className="explore-img" href=" ">
          <img className="explore-img3" src={tech} alt="" />
        </a>
        <a className="explore-img" href=" ">
          <img className="explore-img4" src={market} alt="" />
        </a>
      </div>
      <div className="explore-cat">
        <a className="explore-img" href=" ">
          <img className="explore-img5" src={invest} alt="" />
        </a>
        <a className="explore-img" href=" ">
          <img className="explore-img6" src={enter} alt="" />
        </a>
        <a className="explore-img" href=" ">
          <img className="explore-img7" src={poetry} alt="" />
        </a>
        <a className="explore-img" href=" ">
          <img className="explore-img8" src={health} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Explore;
