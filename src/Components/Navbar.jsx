import React from "react";
import "../App.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar1">
        <div className="logo">
          <img src="/Medicalist-logo-1.svg" alt="Logo" />
        </div>
        <div className="links-info">
          <ul>
            <li>
              <FaLocationDot style={{ color: "blue" }} /> Find Location
            </li>
            <li>
              <FaPhone style={{ color: "blue" }} /> 01442497238
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar2">
        <div className="links">
          <ul>
          <li><NavLink to="/" className="home-link">Home</NavLink></li>
          <li className="blog"><NavLink to="/blog"className="blog-link">Blog</NavLink>
          </li>
          <li className="page"><NavLink to="Appointment" className="page-link">Appointment</NavLink>
          </li>
          <li><NavLink to="service">Services</NavLink></li>
          <li><NavLink to="contact">Contacts</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
