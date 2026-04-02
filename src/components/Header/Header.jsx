import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ isLoggedIn, openModal, onLogout, currentUser }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={`header ${isHomePage ? "header_light" : "header_dark"}`}>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Navigation
        isLoggedIn={isLoggedIn}
        openModal={openModal}
        onLogout={onLogout}
        currentUser={currentUser}
      />
    </header>
  );
}

export default Header;
