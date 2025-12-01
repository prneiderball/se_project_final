import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">NewsExplorer</a>
      <Navigation />
    </header>
  );
}

export default Header;
