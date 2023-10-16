import React from "react";
import Logo from "./Logo"
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <Logo />
            <span className="fs-4 ps-1">{props.title}</span>
          </a>

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
        </header>
      </div>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "You forgot title" };
