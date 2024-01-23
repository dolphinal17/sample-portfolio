import "./HeroImgStyle.css";
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="bg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contacts" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
