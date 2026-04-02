import React from "react";
import "./Navigation.css";
import LogoutIcon from "../../assets/logout-w.svg";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn, openModal, onLogout, currentUser }) {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/saved-news"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }
        >
          Saved articles
        </NavLink>
      )}

      {!isLoggedIn && (
        <button onClick={() => openModal("login")} className="nav__button">
          Sign in
        </button>
      )}

      {isLoggedIn && (
        <button
          className="nav__button nav__button_logged-in"
          onClick={onLogout}
        >
          <span className="nav__username">{currentUser?.name || "User"}</span>
          <img src={LogoutIcon} alt="Log out" className="nav__logout-icon" />
        </button>
      )}
    </nav>
  );
}

export default Navigation;
