import React from "react";
import PropTypes from "prop-types";

const Logo = () => {
  return (
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-gitlab"
        viewBox="0 0 16 16"
      >
        <path d="m15.734 6.1-.022-.058L13.534.358a.568.568 0 0 0-.563-.356.583.583 0 0 0-.328.122.582.582 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.673.673 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.046 4.046 0 0 0 1.34-4.668Z" />
      </svg>
  );
};

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
