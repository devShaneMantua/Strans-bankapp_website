import React from "react";

import { FaArrowRight } from "react-icons/fa";
import chip from "../../assets/chip.png";
import map from "../../assets/map.png";
import pattern from "../../assets/pattern.png";
import visa from "../../assets/visa.png";
import creditcard from "../../assets/credit-card.gif";

import "./header.css";

const Header = () => (
  <div className="container section__padding" id="home">
    <div className="content">
      <h1 className="gradient-text">
        Banking & Budgeting made simple with <span>Strans</span>
      </h1>
      <p>
        Modern and secure services that allows you to manage accounts, make
        payments and transfer using your smartphone.
      </p>
      <div className="buttons">
        <a href="#install" className="neon-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get it Now
        </a>
        <a href="/" className="more">
          Learn More <FaArrowRight size={15} />
        </a>
      </div>
    </div>

    <dir className="glass-card">
      <div className="card">
        <div className="face front">
          <img src={creditcard} alt="credit card gif" className="gif" />
          <img src={map} alt="map" className="map-img" />

          <div className="chip">
            <img src={chip} alt="chip" />
            <img src={visa} alt="visa" />
          </div>
          <h3 className="number">7263 1730 6385 0934</h3>
          <div className="valid">
            <span>
              Valid <br /> Date
            </span>
            <span>4/13</span>
          </div>
          <div className="card-holder">Shane Mantua</div>
        </div>
        <div class="face back">
          <div class="blackbar"></div>
          <div class="cvvtext">
            <div class="white-bar">
              <img src={pattern} alt="pattern" />
            </div>
            <div class="cvv">
              <span>457</span>
            </div>
          </div>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nemo ab itaque quos incidunt, magni neque non at sed accusamus
            dolorem excepturi doloremque dolores cum placeat quae odio delectus
            provident veritatis, voluptatum mollitia facere. Explicabo placeat
            mollitia a aliquam veritatis, quidem cumque sint ab fugiat beatae ut
            dolores molestias laborum!
          </p>
        </div>
      </div>
    </dir>
  </div>
);

export default Header;
