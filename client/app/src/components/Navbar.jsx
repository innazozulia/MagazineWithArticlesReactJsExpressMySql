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
          <img
            src={logo}
            alt=""
          />
        </div>
        <div className="links">
          <Link
            to="/?cat=art"
            className="link">
            Art
          </Link>
          <Link
            to="/?cat=scince"
            className="link">
            Scince
          </Link>
          <Link
            to="/?cat=technology"
            className="link">
            Technology
          </Link>
          <Link
            to="/?cat=cinema"
            className="link">
            Cinema
          </Link>
          <Link
            to="/?cat=design"
            className="link">
            Design
          </Link>
          <Link
            to="/?cat=food"
            className="link">
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
