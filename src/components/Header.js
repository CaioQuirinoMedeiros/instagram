import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <header id="main-header">
        <div className="header-content">
          <Link to="/instagram_web">
            <img src={logo} alt="InstaRocket" />
          </Link>
          <Link to="/new">
            <img src={camera} alt="Enviar publicação" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
