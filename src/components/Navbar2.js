import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <nav
      // #666564  #9798b8
        className="navbar fixed-top navbar-expand-lg navbar-light"
        style={{backgroundColor: "#e6e6e6"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
            <div className="navbar-nav" style={{textColor:"#222673",fontWeight:"bold"}}>
              <Link to="/" className=" nav-item nav-link active ">
                Home
              </Link>
              <Link
                to="/About"
                className=" nav-item nav-link active"  
              >
                About
              </Link>
              <Link
                to="/Product"
                className=" nav-item nav-link active"
              >
                Product
              </Link>
              <Link
                to="/Contact"
                className=" nav-item nav-link active"
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
