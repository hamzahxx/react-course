import React from "react";
import Logo from "./Logo";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand border-bottom border-dark p-0 my-2" href="/">
            <span className="me-1">
              <Logo />
            </span>
            <span className="fs-3">{props.title}</span>
          </a>
          <button
            className="custom-nav-button d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link me-3active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "You forgot title" };
