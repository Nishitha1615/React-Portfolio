import React from "react";
import "./Styles/About.css";
import resume from "../Assest/Resume.pdf";
import useMediaQuery from '@mui/material/useMediaQuery';
const About = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    
      <div className="about star">
        <div className="heading star1">About Me</div>
        <p>
          I am an Engineering Btech-IT Graduate from Presidency University,
          CGPA-6.49
          <br></br>I am a Fullstack web-developer.
        </p>
        <br></br>
        <a href={resume} download="Resume">
          <button className="glassresume">Resume</button>
        </a>
        <div className="blob2 star2"></div>

        <div className="bulb">
        
        </div>

        <div className="bulb1">
        
        </div>
      </div>

    
  );
};

export default About;
