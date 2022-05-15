import React from "react";

import logo from "../../assets/logo.png";

import "./footer.css";

const Footer = () => (
  <div className="footer footer-bg">
    <p className="test">i</p>
    <div className="footer-content">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
        <h1 className="gradient-logo">trans</h1>
      </a>
      <div className="links">
        <p>
          <a href="#features">Features</a>
        </p>

        <p>
          <a href="#about">About</a>
        </p>

        <p>
          <a href="/">Terms & Conditions</a>
        </p>

        <p>
          <a href="/">Policy</a>
        </p>
      </div>
      <div class="copyright">
        <h5>
          Copyright@ 2022 Strans,{" "}
          <a
            href="https://devshanemantua.github.io/ShaneM-Portfolio/"
            className="portfolio"
          >
            Shane Del Moira
          </a>
        </h5>
      </div>
    </div>
  </div>
);

export default Footer;
