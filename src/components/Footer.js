import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className="">
          {/* Footer  */}
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#1c2331" }}
          >
            {/* Section: Social media  */}
            <section className="d-flex justify-content-between p-4"></section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/*  Grid row*/}
                <div className="row mt-3">
                  {/* Grid column*/}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content*/}
                    <h6 className="text-uppercase fw-bold">Manu Enterprises</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "160px",
                        backgroundColor: " #7c4dff",
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
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>
                  {/*  Grid column

          Grid column*/}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "88px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="/Product" className="text-white">
                      JFD-w6
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        JFD-w10
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        JFD-w10GPS
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        JPC-A18 WIFI
                      </a>
                    </p>
                  </div>
                  {/*  Grid column 

          Grid column*/}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/*Links */}
                    <h6 className="text-uppercase fw-bold">Menu</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "55px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="/" className="text-white">
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="/About" className="text-white">
                        About
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        Product
                      </a>
                    </p>
                    <p>
                      <a href="/Contact" className="text-white">
                        Contact us
                      </a>
                    </p>
                  </div>
                  {/* Grid column

           Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "80px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <i className="fas fa-home mr-3"></i> New Delhi, NY 10012,
                      INDIA
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i>{" "}
                      manu@enterperises.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 9196200
                      98499/98288
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i>Please Write Company
                      Policy here
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Privacy Policy */}
            {/* <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
          <p className="text-white">Please Write Company Policy here</p>

    </div> */}

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(9, 9, 9, 0.8)" }}
            >
              © 2022 Copyright:
              <a className="text-white" href="https://mdbootstrap.com/">
                Manu EnterPrises
              </a>
            </div>

            {/* About developer company */}
            <div
              className="text p-1"
              style={{
                backgroundColor: "rgba(178, 166, 172, 0.8)",
                textAlign: "right",
              }}
            >
              Developed by:
              <a className="text-white" href="https://codelovertechnology.com/">
                CodeLover Technology Pvt. Ltd.
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
