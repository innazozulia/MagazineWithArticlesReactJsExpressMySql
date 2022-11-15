import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img
        className="logo"
        src={logo}
        alt=""></img>
      <span>Made with ReactJS, Express, MySQL</span>
    </footer>
  );
};

export default Footer;
