import React from "react";

import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";
import phone3 from "../../assets/phone3.png";
import "./about.css";

const About = () => (
  <div className="section__padding" id="about">
    <div className="contain">
      <div className="about-text">
        <h2 className="gradient-text">
          The Integration of Technology and Design
        </h2>
        <p className="text">
          The picture shown was designed by Dmitry Litvinenko. To see the
          design, click the link below. Lorem ipsum dolor sit, amet consectetur
          adipisicing.
        </p>
        <div className="buttons">
          <a
            href="https://dribbble.com/shots/14944850-Wallet-App"
            className="neon-button"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            LINK
          </a>
        </div>
      </div>

      <div className="image">
        <img src={phone1} alt="" />
      </div>
    </div>

    <div className="contain reverse">
      <div className="about-text">
        <h2 className="gradient-text">We Provide You The Best Security</h2>
        <p className="text">
          The picture shown was designed by Ghulam Rasool. To see the design,
          click the link below. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div className="buttons">
          <a
            href="https://dribbble.com/shots/15167068-Finance-Mobile-App-Design"
            className="neon-button"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            LINK
          </a>
        </div>
      </div>

      <div className="image">
        <img src={phone2} alt="" />
      </div>
    </div>

    <div className="contain">
      <div className="about-text">
        <h2 className="gradient-text">Easily Monitor Your Budget</h2>
        <p className="text">
          The picture shown was designed by Ghulam Rasool. To see the design,
          click the link below. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
        <div className="buttons">
          <a href="https://dribbble.com/ghulaam-rasool" className="neon-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            LINK
          </a>
        </div>
      </div>

      <div className="image">
        <img src={phone3} alt="" />
      </div>
    </div>
  </div>
);

export default About;
