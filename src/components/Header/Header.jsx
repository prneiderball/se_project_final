
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ isLoggedIn, openModal, onLogout, currentUser }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isMenuOpen && (
        <div
          className="header__overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`header ${isHomePage ? "header_light" : "header_dark"} ${
          isMenuOpen ? "header_menu-open" : ""
        }`}
      >
        <Link
          to="/"
          className={`header__logo ${
            isHomePage ? "" : "header__logo_dark"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          NewsExplorer
        </Link>

        <button
          className={`header__menu-btn ${
            isMenuOpen ? "header__menu-btn_open" : ""
          }`}
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
        </button>

        <Navigation
          isLoggedIn={isLoggedIn}
          openModal={openModal}
          onLogout={onLogout}
          currentUser={currentUser}
          isDark={!isHomePage}
          isMenuOpen={isMenuOpen}
        />
      </header>
    </>
  );
}

export default Header;
