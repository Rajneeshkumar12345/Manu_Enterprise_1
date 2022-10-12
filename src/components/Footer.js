import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <div className="footer " style={{maxWidth:"100%"}}>
        <div className="" >
          {/* Footer  */}
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#d0d6d5", maxWidth:"100%" }}
            
          >
            <section className="d-flex justify-content-between p-4"></section>

            <section className="">
              <div className="container text-center text-md-start mt-5" >
                {/*  Grid row*/}
                <div className="row mt-3" >
                  {/* Grid column*/}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                    {/* Content*/}
                    <h6 className="text-uppercase fw-bold text-dark" >Manu Enterprises</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "160px",
                        backgroundColor: "#040100",
                        height: "2px",
                      }}
                    />
                    <br></br>
                    <img
                      src="ME_Logo.png"
                      height="40"
                      width="170"
                      alt="photo"
                    />
                    <p className="text-dark Footer_Cmp" >
                       Found in year 2022, with a vision to provide the best
                        and value for money vehicle safety, Personal Security
                        and tracking solution, including Hardware, Software,
                        Consultancy and Technical Support.
                    </p>
                  </div>
                  {/*  Grid column

          Grid column*/}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-dark">
                    
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto "
                      style={{
                        width: "88px",
                        backgroundColor: "#040100",
                        height: "2px",
                      }}
                    />
                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WFD-w6</Link>
                    </p>
                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WFD-x7</Link>
                    </p>
                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WFD-w10</Link>
                    </p>
                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WFD-w10 GPS</Link>
                    </p>

                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WPC-A18 wifi</Link>
                    </p>
                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WFD-GT8</Link>
                    </p>
                    <p>
                    <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>WFD-GT9</Link>
                    </p>
                                    
                  </div>
                  {/*  Grid column 

          Grid column*/}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"  style={{textColor:"#222673",fontWeight:"normal"}}>
                    {/*Links */}
                    <h6 className="text-uppercase fw-bold text-dark">Menu</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "55px",
                        backgroundColor: "#040100",
                        height: "2px", 
                      }}
                     
                    />
                 

                    <div className="text-dark " style={{listStyle:"none"}}>
                      <p>
                        <Link to="/" className="text-dark" style={{textDecoration:"none"}}>Home</Link>
                      </p>
                      <p>
                      <Link to="/About" className="text-dark" style={{textDecoration:"none"}}>About</Link>
                      </p>
                      <p>
                      <Link to="/Product" className="text-dark" style={{textDecoration:"none"}}>Product</Link>
                      </p>
                      <p>
                      <Link to="/Contact" className="text-dark" style={{textDecoration:"none"}}>Contact us</Link>
                      </p>
                      
                    </div>
                  </div>
                  {/* Grid column

           Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold text-dark">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "80px",
                        backgroundColor: "#040100",
                        height: "2px",
                      }}
                    />
                    <p className="text-dark">
                      <i className="fas fa-home mr-3 text-dark"></i> New Delhi, NY 10012,
                      INDIA
                    </p>
                    <p className="text-dark">
                      <i className="fas fa-envelope mr-3"></i>{" "}
                      info@mtrak.com
                    </p>
                    <p className="text-dark">
                      <i className="fas fa-phone mr-3"></i> + 9196200
                      98499/98288
                    </p>
                    <p className="text-dark">
                      <i className="fas fa-print mr-3"></i>Privacy Policy
                    </p>
                    <p className="text-dark">
                      <i className="fas fa-print mr-3"></i>Terms and conditions
                    </p>
                  </div>
                </div>
              </div>
            </section>

        

            <div
              className="text-center p-1"
              style={{ backgroundColor: "rgba(9, 9, 9, 0.8)" }}
            >
              © 2022 Copyright:
              <a className="text-white" href="https://mtrak.in/">
                Manu EnterPrises
              </a>
            </div>

            <div
              className="text-center p-1"
              style={{ backgroundColor: "rgba(9, 9, 9, 0.8)" }}
            >
              Developed by: 
              <a className="text-white" href="https://codelovertechnology.com/" target="_blank">
                CodeLover Technology Pvt. Ltd.
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
