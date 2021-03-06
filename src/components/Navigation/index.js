import React from 'react';
import { Navbar, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/dc_logo.png";


function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="light" sticky="top">
        <NavLink className="nav-link" to="/" >
          <div class="text-dark">
            <h4 class="nav-title-font">Damaris Campos</h4>
            <Image
              width={50}
              // height={150}
              //className="align-self-center"
              src={logo} fluid
              alt="developer logo" />
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-dark">About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/projects">
              <div class="nav-font text-dark">Projects</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-dark">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/skills">
              <div class="nav-font text-dark">Skills</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;