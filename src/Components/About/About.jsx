import React from "react";
import "./About.css";
import play_icon from "../../assets/About_Video/play-icon.png";
import backgroundImage from "../../assets/Hero_Page_Image/Farm-1.jpg";
const About = ({ setPlayState, aboutdetails }) => {
  return (
    <div id="about_us" className="about">
      <div className="about-left">
        <img src={backgroundImage} alt="" className="about-img" />
        <img
          src={play_icon}
          alt="Play Video"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Flaczit Agro Pharma</h2>
        <p>{aboutdetails}</p>
      </div>
    </div>
  );
};

export default About;
