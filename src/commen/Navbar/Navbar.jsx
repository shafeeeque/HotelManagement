import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../../../Images/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <nav className="navbar">
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div className="container flex_space">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className="nav-menu active">
              <li>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={closeMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/destination" onClick={closeMobileMenu}>
                  Destination
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonal" onClick={closeMobileMenu}>
                  Testimonal
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="login-area flex">
              <li>
                <Link to="/Signup">
                  <i className="far fa-chevron-right">Sign In</i>
                </Link>
              </li>

              <li>
                <Link to="/Login">
                  <i className="far fa-chevron-right">Log In</i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="container felx_space">
          <div className="logo">
            <img src='images/logo.png' alt="logo" />
          </div>
          <div className="contact flex_space">
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>
            </div>
            <div className="text">
              <h4>Working Hours</h4>
              <Link to="/contact">Monday - Sunday : 9.00am to 6.00pm</Link>
            </div>

            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
            </div>
            <div className="text">
              <h4>Call Us Hours</h4>
              <Link to="/contact">+1 238947445</Link>
            </div>

            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
            </div>
            <div className="text">
              <h4>Mail Us</h4>
              <Link to="/contact">info@stetho.com</Link> 
            </div>
          </div>

          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
