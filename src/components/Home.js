import React from "react";

export default function Home() {
  return (
    <>
      <div className="home" style={{ backgroundColor: "#707987",overFlow:"scroll", overFlowX:'hidden', maxWidth:"100%" }}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/JFD-w6.png"
                class="d-block w-100"
                alt="..."
                className="img-fluid"
                style={{ width: "60rem", height: "38rem", objectFit: "fill", marginLeft:'12rem'}}
              />
            </div>

            {/* 2 */}
            <div class="carousel-item ">
              <img
                src="/JFD-w10GPS.png"
                class="d-block w-100 "
                alt="..."
                style={{
                  width: "60rem",
                  height: "544px",
                  marginTop: "4rem",
                  objectFit: "fill",
                }}
              />
            </div>

            {/* 3 */}
            
            <div class="carousel-item">
              <img
                src="/JFD-w10.png"
                class="d-block w-100"
                alt="..."
                style={{ width: "60rem", height: "608px",objectFit: "fill" }}
              />
            </div>

            {/* 4 */}
            {/* 5 */}
            {/* 6 */}
            {/* 7 */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        className="product"
        style={{
          fontFamily: "sans-serif",
          fontSize: "1rem",
          marginTop: "0rem",
        }}
      >
        <div className="">
          <div className="row">
            <div className="col">
              <div className="card" style={{ backgroundColor: "#8e918f" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 text-left ">
                      <img
                        className="image"
                        src="/JFD-w6.png"
                        alt="sans"
                        width="400px"
                        height=""
                        style={{
                          marginLeft: "1.4rem",
                          marginTop: "1.7rem",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="card-text text-white"
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <h4> JFD-w6</h4>
                        <p>CPU：Felica</p>
                        <p>SIZE 81*18*25（mm)</p>
                        <p>CAM：H63/720P/AHD</p>
                        <p>Material: Zinc alloy</p>
                        <p>compressed format：MPEG</p>
                        <p>Memory Card：32G/C10</p>
                        <p>Recording：Loop recording</p>
                        <p>shooting angle：140degree</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          className="container"
          style={{
            marginTop: "2rem",
            fontFamily: "sans-serif",
            fontSize: "1rem",
          }}
        >
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div
                        className="card-text "
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <p>
                          HD recorder running on Android car navigation ADAS
                          Speed watermark
                        </p>
                        <p> CPU：Felica</p>
                        <p>Size 80*10*45（mm）</p>
                        <p> Cam：H65/720P/AHD</p>
                        <p>Material：Zinc Alloy</p>
                        <p>compressed format：MPEG</p>
                        <p>Memory：32G/C10</p>
                        <p>Recording：Loop recording</p>
                        <p> shooting angle：140degree</p>
                      </div>
                    </div>
                    <div className="col-sm-6 text-right">
                      <img
                        className="image"
                        src="Product2.jpg"
                        alt="sans"
                        width="300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ marginTop: "2rem" }}>
          <div className="row">
            <div className="col">
              <div className="card" style={{ backgroundColor: "#8e918f" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <img
                        className="image"
                        src="/JFD-w10.png"
                        alt="sans"
                        width="300px"
                        style={{
                          borderRadius: "15px 50px",
                          marginLeft: "1.4rem",
                          marginTop: "5rem",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="card-text text-white"
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <h4> JFD-w10</h4>
                        <p>CPU：Felica</p>
                        <p>Size: 12*6*2cm（mm）</p>
                        <p>Cam：GC2719/1080P/AHD</p>
                        <p>Material：Zinc Alloy</p>
                        <p>compressed format：MPEG</p>
                        <p>Memory：32G/C10</p>
                        <p>Recording：Loop recording</p>
                        <p>shooting angle：140degree</p>
                        <p>
                          WiFi mobile phone connected 24-hour parking monitoring
                          (USB interface optional)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div
                        className="card-text"
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <h4> JFD-w10GPS</h4>
                        <p> Speed display Location display Time display</p>
                        <p>CPU：Felica</p>
                        <p> Size: 12*6*2cm（mm）</p>
                        <p>Cam：GC2719/1080P/AHD</p>
                        <p>Material：Zinc Alloy</p>
                        <p>compressed format：MPEG</p>
                        <p>Memory：32G/C10</p>
                        <p>Recording：Loop recording</p>
                        <p>
                          shooting angle：140degree WiFi mobile phone connected
                          24- hour parking monitoring (USB interface optional)
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 text-right">
                      <img
                        className="image"
                        src="/JFD-w10GPS.png"
                        alt="sans"
                        width="300px"
                        style={{ marginTop: "80px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ marginTop: "2rem" }}>
          <div className="row">
            <div className="col">
              <div className="card" style={{ backgroundColor: "#8e918f" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <img
                        className="image"
                        src="/JPC-A18_WIFI.png"
                        alt="sans"
                        width="300px"
                        style={{
                          borderRadius: "15px 50px",
                          marginLeft: "1.4rem",
                          marginTop: ".5rem",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="card-text text-white"
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <h4>JPC-A18 WIFI</h4>
                        <p>4G dvr with rear camera</p>
                        <p>LINUX intelligent system</p>
                        <p>RAM128M+ROM256M</p>
                        <p>4G recorder</p>
                        <p>Main control: Spreadtrum SL8521E</p>
                        <p>Front lens 1080P GC2053 Gekewei</p>
                        <p>Pull back lens 1080P AHD4005</p>
                        <p>
                          {" "}
                          WIFI, support remote live broadcast and remote
                          monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div
          className="container"
          style={{ marginTop: "2rem", marginBottom: "3rem" }}
        >
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div
                        className="card-text"
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <p> CMSV6 4G GPS dual lens DVR</p>
                        <p>LINUX intelligent system</p>
                        <p>RAM256M+ROM512M</p>
                        <p>4G recorder</p>
                        <p>Main control: Spreadtrum SL8521E</p>
                        <p>2-inch display</p>
                        <p>Front lens 1080P GC2053 Gekewei</p>
                        <p>Pull back lens 1080P AHD4005</p>
                        <p>
                          {" "}
                          WIFI, support remote live broadcast and remote
                          monitoringmobile phone connected 24-hour parking
                          monitoring
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 text-right">
                      <img
                        className="image"
                        src="Product6.jpg"
                        alt="sans"
                        width="300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ marginTop: "2rem" }}>
          <div className="row">
            <div className="col">
              <div className="card" style={{ backgroundColor: "#8e918f" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <img
                        className="image"
                        src="/JFD-w10.png"
                        alt="sans"
                        width="300px"
                        style={{
                          borderRadius: "15px 50px",
                          marginLeft: "1.4rem",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="card-text text-white"
                        style={{ fontStyle: "italic", font: "haydena" }}
                      >
                        <p>
                          {" "}
                          FVC-030 blind radar system,best aftermarket blind spot
                          detection system 2022
                        </p>
                        <p>WIFI Truck camera, up to 128G TF Card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="home" style={{ 
            
            marginBottom: "2.5rem",
            marginLeft: "2.5rem",
            marginRight: "2.5rem",marginTop:'7rem'
            
            }}>
        <div
          className="card-group"
            
        >
          <div className="card" >
            <img
              src="product1.jpg"
              className="card-img-top"
              alt="ProductImage"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="Product2.jpg"
              className="card-img-top"
              alt="ProductImage"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="Product3.jpg"
              className="card-img-top"
              alt="ProductImage"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>




        <div
          className="card-group"
        style={{marginTop:"3rem"}}
        >
          <div className="card">
            <img
              src="Product4.jpg"
              className="card-img-top"
              alt="ProductImage"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="Product5.jpg"
              className="card-img-top"
              alt="ProductImage"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="Product6.jpg"
              className="card-img-top"
              alt="ProductImage"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
