import React from "react";

import img1 from "../../assets/security.png";
import img2 from "../../assets/bill-payment.png";
import img3 from "../../assets/wallet.png";
import img4 from "../../assets/payment-system.png";
import img5 from "../../assets/alert.png";
import img6 from "../../assets/budget.png";
import "./features.css";

const Features = () => (
  <div className="features section__padding gradient2__bg" id="features">
    <h2>
      <span className="gradient-text">Strans</span> Has What You Need
    </h2>
    <div className="feature-cards">
      <div className="card">
        <img src={img1} alt="Secure Online Banking" />
        <h3 className="card-content">Secure Online Banking</h3>
      </div>

      <div className="card">
        <img src={img2} alt="Automatic Bill Payments" />
        <h3 className="card-content">Automatic Bill Payments</h3>
      </div>

      <div className="card">
        <img src={img3} alt="Secure Digital Wallet" />
        <h3 className="card-content">Secure Digital Wallet</h3>
      </div>
    </div>
    <div className="feature-cards">
      <div className="card">
        <img src={img4} alt="Unified Payment System" />
        <h3 className="card-content">Unified Payment System</h3>
      </div>

      <div className="card">
        <img src={img5} alt="Secure Message Alerts" />
        <h3 className="card-content">Secure Message Alerts</h3>
      </div>

      <div className="card">
        <img src={img6} alt="Financial Planning" />
        <h3 className="card-content">Financial Planning</h3>
      </div>
    </div>
  </div>
);

export default Features;
