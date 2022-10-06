import React from "react";

const Navbar2 = () => {
  return (
    <>
      <nav 
         className="navbar fixed-top navbar-expand-lg navbar-light  "
         style={{ backgroundColor: "#666564" }}
       >
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/ME_Logo.png"  className="img-fluid" alt="..." width="150" height="60" style={{marginLeft:"20px"}}/>
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
              <a className=" nav-item nav-link active text-white" href="/">
                Home
              </a>
              <a className="nav-item nav-link active text-white" href="/About">
                About
              </a>
              <a
                className="nav-item nav-link active text-white"
                href="/Product"
              >
                Product
              </a>
              <a
                className="nav-item nav-link active text-white"
                href="/Contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
