import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ isLoggedIn, openModal }) {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        NewsExplorer
      </a>
      <Navigation isLoggedIn={isLoggedIn} openModal={openModal} />{" "}
    </header>
  );
}

export default Header;