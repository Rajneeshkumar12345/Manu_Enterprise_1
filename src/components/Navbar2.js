import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light  "
        style={{ backgroundColor: "#666564" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/ME_Logo.png"
              className="img-fluid"
              alt="..."
              width="150"
              height="60"
              style={{ marginLeft: "20px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className=" nav-item nav-link active text-white">
                Home
              </Link>
              <Link
                to="/About"
                className=" nav-item nav-link active text-white"
              >
                About
              </Link>
              <Link
                to="/Product"
                className=" nav-item nav-link active text-white"
              >
                Product
              </Link>
              <Link
                to="/Contact"
                className=" nav-item nav-link active text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
