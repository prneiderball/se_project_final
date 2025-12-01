import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn }) {
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

      {!isLoggedIn && <button className="nav__button">Sign in</button>}

      {isLoggedIn && (
        <button className="nav__button nav__button_logged-in">Elise ▾</button>
      )}
    </nav>
  );
}

export default Navigation;
