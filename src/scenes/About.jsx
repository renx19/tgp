import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
   
      <div className="about-con">
        {/* First paragraph */}
        <h1 className='about-h1'>HISTORY</h1>
        <div className="about-content first-color" id="reverse-on-mobile">
          <div className="text">
            <h2>Tayhi Chapter was founded on the premise that everyone should be given the same respect and treated equally, regardless of whether they are community-based or school-based. Tayhi Chapter was officially founded on November 11, 2000. The call for an alliance with BUTC Chapter emerged due to students having scuffles with fraternal residents on multiple occasions. Former BUTC GT Marlon Cante and officers would convene at Brod Virgilio Rodriguez's residence to settle disputes. At that time, Tayhi had many senior members, but there was no record of a chapter driven to maximize the potential of harnessing its purpose — to serve and excel — and to ensure that both triskelion residents and triskelion students recognized each other and avoided conflict.</h2>
          </div>
          <div className="about-image">   
            <img src='/About/Marlon.jpg' alt="Marlon" />
          </div>
        </div>
        <div className="about-content second-color">
          <div className="about-image">   
            <img src='/About/Carlo.jpg' alt="Carlo" />
          </div>
          <div className="text">
            <h2>In early 1999, Brod Carlo Eleuterio, along with others who shared the aspiration to serve, secured the signatures of all senior Triskelions in Tayhi; no one was bypassed, and all gave their blessings to proceed. From this mandate emerged the urgency to create its own chapter policy and by-laws. An election was held at Brod Virgilio Rodriguez's residence on November 11th, attended and witnessed by then GenSec Nephtali Godino, Dennis Cua, officers of BUTC, and its general membership, who elected officers.</h2>
          </div>
        </div>
        {/* Third paragraph */}
        <div className="about-content third-color" id="reverse-on-mobile">
          <div className="text">
            <h2>Tayhi Chapter recognizes all Tayhi Triskelion Seniors and its members for their support and guidance, allowing us to represent the Fraternity and enforce its Tenets and Codes of Conduct until this day and the rest is history.</h2>
          </div>
          <div className="about-image">   
            <img src='/About/Moy2.jpg' alt="Moy" />
          </div>
        </div>
        
        <div className="about-content fourth-color" id="reverse-on-mobile">
          <div className="about-video">   
            {/* Add controls and autoplay attributes to the video tag */}
            <video controls autoPlay>
              <source src='/About/Speech.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
  
  );
}

export default About;
