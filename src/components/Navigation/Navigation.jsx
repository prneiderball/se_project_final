import React from "react";
import "./Navigation.css";
import LogoutIcon from "../../assets/logout-w.svg";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn, openModal, onLogout, currentUser, isDark }) {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav__link${isActive ? " nav__link_active" : ""}${isDark ? " nav__link_dark" : ""}`
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/saved-news"
          className={({ isActive }) =>
            `nav__link${isActive ? " nav__link_active" : ""}${isDark ? " nav__link_dark" : ""}`
          }
        >
          Saved articles
        </NavLink>
      )}

      {!isLoggedIn && (
        <button
          onClick={() => openModal("login")}
          className={`nav__button${isDark ? " nav__button_dark" : ""}`}
        >
          Sign in
        </button>
      )}

      {isLoggedIn && (
        <button
          className={`nav__button nav__button_logged-in${isDark ? " nav__button_logged-in_dark" : ""}`}
          onClick={onLogout}
        >
          <span className="nav__username">{currentUser?.name || "User"}</span>
          <img
            src={LogoutIcon}
            alt="Log out"
            className={`nav__logout-icon${isDark ? " nav__logout-icon_dark" : ""}`}
          />
        </button>
      )}
    </nav>
  );
}

export default Navigation;
