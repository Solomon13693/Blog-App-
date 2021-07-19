import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <h4>
            Shalom <span>Brand</span>{" "}
          </h4>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/"> Home </Link>
        <Link to="/create"> Create Blog </Link>
      </div>
    </header>
  );
}

export default Header;
