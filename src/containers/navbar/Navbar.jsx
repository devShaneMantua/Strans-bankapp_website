import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const closeMenu = () => setClick(false);

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <h1 className="gradient-logo">trans</h1>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <div className="login">
            <p>Sign in</p>
            <button type="button">
              <span> Sign up</span>
              <i></i>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
