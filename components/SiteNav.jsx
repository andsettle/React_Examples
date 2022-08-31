import React from "react";
import { Link } from "react-router-dom";
import debug from "sabio-debug";

const _logger = debug.extend("SiteNav");

function SiteNav(props) {
  _logger(props);
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link to="/Home" className="navbar-brand">
            <img
              src="https://pw.sabio.la/images/Sabio.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to="/Home"
                  className="nav-link px-2 text-white link-button"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/components/friends/Friends"
                  className="nav-link px-2 text-white link-button"
                >
                  Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/components/jobs/Jobs"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/components/techcompanies/Companies"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/components/events/Events"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/TestAndAjax"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Test and Ajax Call
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/components/codeChallenge/Cars"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  codeChallenge
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <Link
                to="/Home"
                className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                Unknow User
              </Link>
              <Link
                to="/components/user/Login"
                type="button"
                className="btn btn-outline-light me-2"
              >
                Login
              </Link>
              <Link
                to="/components/user/Register"
                type="button"
                className="btn btn-warning"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default SiteNav;
