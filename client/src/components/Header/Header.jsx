import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({isLoggedIn}) {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        NewsExplorer
      </a>
      <Navigation isLoggedIn={isLoggedIn} />{" "}
    </header>
  );
}

export default Header;
