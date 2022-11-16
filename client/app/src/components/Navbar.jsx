import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = React.useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="links">
          <Link
            className="link"
            to="/?cat=art">
            Art
          </Link>
          <Link
            className="link"
            to="/?cat=science">
            Scince
          </Link>
          <Link
            className="link"
            to="/?cat=technology">
            Technology
          </Link>
          <Link
            className="link"
            to="/?cat=cinema">
            Cinema
          </Link>
          <Link
            className="link"
            to="/?cat=design">
            Design
          </Link>
          <Link
            className="link"
            to="/?cat=food">
            Food
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link
              className="link"
              to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link
              className="link"
              to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
