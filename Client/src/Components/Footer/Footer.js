import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
        <footer className="footer">
      <div>       
         <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="selebritymore@gmail.com">
            selebritymore@gmail.com
          </a>
        </p>
        <p>
        </p>
        <p>&copy; 2025 Murasakibara Atsushi</p>
      </div>
    </footer>
  );
};

export default Footer;
