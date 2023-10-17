import React from "react";
import Logo from "./Logo";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div className={props.color}>
      <nav className="navbar navbar-expand-md">
        <div className="container py-3 mb-4 border-bottom">
          <a className="navbar-brand" href="#">
            <Logo />
            <span className="fs-4 ps-1">{props.title}</span>
          </a>
          <button
            className="navbar-toggler custom-nav-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Logo />
                <span className="fs-4 ps-1">{props.title}</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex justify-content-end">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link active bg-dark"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Benefits
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "You forgot title" };
