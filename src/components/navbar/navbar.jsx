import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  {
    /*const [menu, setMenu] = useState("Home");*/
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>
          Fitney<span>.</span>
        </p>
      </div>
      {/*<ul className="nav-menu">
        <li onClick= {()=>{setMenu("home")}} style={{ color: menu === "home" ? "#FFB300" : "inherit" }}>Home</li>
        <li onClick= {()=>{setMenu("classes")}} style={{ color: menu === "classes" ? "#FFB300" : "inherit" }}> Classes</li>
        <li onClick= {()=>{setMenu("aboutus")}} style={{ color: menu === "aboutus" ? "#FFB300" : "inherit" }}>About Us</li>
        <li onClick= {()=>{setMenu("contactus")}} style={{ color: menu === "contactus" ? "#FFB300" : "inherit" }}>Contact Us</li>
      </ul>*/}
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-yellow" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/classes"
            className={({ isActive }) =>
              `${isActive ? "text-yellow" : "text-white"}`
            }
          >
            Classes
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `${isActive ? "text-yellow" : "text-white"}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `${isActive ? "text-yellow" : "text-white"}`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="nav-login">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
