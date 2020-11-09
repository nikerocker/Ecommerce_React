import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="container-fluid header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <img
            src="images/svg/logo.svg"
            width="30"
            height="30"
            alt=""
            loading="lazy"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown active">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/Men">
                  Men
                </Link>
                <Link className="dropdown-item" to="/Women">
                  Women
                </Link>
                <Link className="dropdown-item" to="/Kids">
                  Kids
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About Us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Our Store">
                Our Store
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact Us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav user-interaction">
            <li className="nav-item">
              <Link className="nav-link search" to="/Search">
                Search
              </Link>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </li>
            <li className="nav-item user">
              <Link className="nav-link" to="/user-info">
                <img src="images/svg/user-icon.svg" alt="user-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart-page">
                <img src="images/svg/cart-icon.svg" alt="cart" />
                <span className="circle">{props.cartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
