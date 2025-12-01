import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <a href="/" className="nav__link nav__link_active">Home</a>
      <button className="nav__button">Sign in</button>
    </nav>
  );
}

export default Navigation;
