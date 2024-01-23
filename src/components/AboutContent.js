import React from 'react';
import './AboutContentStyle.css';
import { Link } from 'react-router-dom';
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who am I?</h1>
        <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
      </div>
      <Link to="/contacts">
        <button className='btn'>Contacts</button>
      </Link>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={react1} alt='react1' className='img'></img>
            </div>
            <div className='img-stack bottom'>
                <img src={react2} alt='react2' className='img'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
