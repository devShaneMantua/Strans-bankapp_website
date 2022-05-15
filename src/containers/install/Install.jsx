import React from "react";

import download from "../../assets/download.png";
import "./install.css";

const Install = () => (
  <div className="install" id="install">
    <div className="install-content">
      <h3 className="gradient-text">Download Strans Now </h3>
      <h6 className="gradient-text">IT'S FREE </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
        perspiciatis harum? Sit totam perspiciatis delectus!
      </p>
      <img src={download} alt="Download The App" />
    </div>
  </div>
);

export default Install;
