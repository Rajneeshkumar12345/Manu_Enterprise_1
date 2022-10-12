import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap mt-3">
        <div class="card d-flex position-relative flex-column">
          <div class="imgContainer img-fluid">
            <img src="/Card4_1.png" width="940" height="200"></img>
          </div>
          <div class="content">
            <h4>
              Let the recorder get rid of night blindness and shoot more clearly
            </h4>
            <p>
              1080p high-definition night vision, even in the weak light
              environment, can also shoot clearly.
            </p>
          </div>
        </div>
        <div class="card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src="/Card5_1.png" width="940" height="200"></img>
          </div>
          <div class="content">
            <h4>Lock video to restore accident scene</h4>
            <p>
              Built in gravity senser, when sensing the emergency braking, the
              current video instantly locks, preventing the important files from
              being covered during cyclic recording.
            </p>
          </div>
        </div>
        <div class="card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src="/Card6_1.png" width="940" height="200"></img>
          </div>
          <div class="content">
            <h4>
              Automatic coverage of cyclic video recording to realize seamless
            </h4>
            <p>
              Cyclic video recording, no seconds missing, segmened saving,
              automatic detection of storage space.
            </p>
          </div>
        </div>
      </div>

      <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap ">
        <div class="card d-flex position-relative flex-column">
          <div class="imgContainer img-fluid">
            <img src="/Card7_1.png" width="940" height="200"></img>
          </div>
          <div class="content">
            <h4>150 degree wide view, high defintion and wide angle</h4>
            <p>
              2.2 aperture 150 wide angle lens, covering 6 lanes, more
              comperehensive record, clear picture without deformation, driving
              safety is guaranteed.
            </p>
          </div>
        </div>
        <div class="card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src="/Card8_1.png" width="940" height="200"></img>
          </div>
          <div class="content">
            <h4>
              The security guard after the third generation parking monitering
            </h4>
            <p>
              When any Collision sensing, it will automatically start of 30s
              video recording.
            </p>
          </div>
        </div>
        <div class="card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src="/Card9_1.png" width="940" height="200"></img>
          </div>
          <div class="content">
            <h4>Intelligent voice alert for multi language pronunciation</h4>
            <p>
              Buil in multi language pronunciation, no need to worry about
              language barrier.
            </p>
          </div>
        </div>
      </div>

      {/* second div components */}

      <div class="container-fluid mb-5">
        <div class="text-center text-white mt-5">
          <h1>Our six main functions to ensure the safety of driving</h1>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="our-services settings">
                <div class="icon">
                  {" "}
                  <img src="https://i.imgur.com/6NKPrhO.png" />
                </div>
                <h4>Anti shake upgrade</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services speedup">
                <div class="icon">
                  {" "}
                  <img src="https://i.imgur.com/KMbnpFF.png" />{" "}
                </div>
                <h4>HD night vision</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services privacy">
                <div class="icon">
                  {" "}
                  <img src="https://i.imgur.com/AgyneKA.png" />{" "}
                </div>
                <h4>Parking monitering</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="our-services backups">
                <div class="icon">
                  {" "}
                  <img src="https://i.imgur.com/vdH9LKi.png" />{" "}
                </div>
                <h4>Multi country voice production</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services ssl">
                <div class="icon">
                  {" "}
                  <img src="https://i.imgur.com/v6OnUqu.png" />{" "}
                </div>
                <h4>Collision lock</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services database">
                <div class="icon">
                  {" "}
                  <img src="https://i.imgur.com/VzjZw9M.png" />{" "}
                </div>
                <h4>Voltage protection</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content from 10 to 18 */}
      <div class="container">
        <div class="d-lg-flex" style={{ marginLeft: "7rem" }}>
          <div
            class="card-Banner border-0 me-lg-4 mb-lg-0 mb-4"
            style={{ height: "450px" }}
          >
            <div class="backgroundEffect"></div>
            <div class="pic">
              {" "}
              <img
                class="img-fluid"
                src="/Card10.png"
                width="270"
                height="250"
                alt=""
              />
            </div>
            <div class="content">
              <div class="d-flex align-items-center justify-content-between mt-5 pb-3">
                <div class="">
                  <Link to="/Product" style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card-Banner border-0 me-lg-4 mb-lg-0 mb-4"
            style={{ height: "450px" }}
          >
            <div class="backgroundEffect"></div>
            <div class="pic">
              {" "}
              <img
                class="img-fluid"
                src="/Card11.png"
                width="270"
                height="250"
                alt=""
              />
            </div>
            <div class="content">
              <div class="d-flex align-items-center justify-content-between mt-5 pb-3">
                <div class="">
                  <Link to="/Product" style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card-Banner border-0 mb-lg-0 mb-4"
            style={{ height: "450px" }}
          >
            <div class="backgroundEffect"></div>
            <div class="pic">
              {" "}
              <img class="img-fluid" src="/Card14.jpeg" width="270" alt="" />
            </div>
            <div class="content">
              <div class="d-flex align-items-center justify-content-between mt-5 pb-3">
                <div class="">
                  <Link to="/Product" style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div
          class="d-lg-flex"
          style={{ marginLeft: "7rem", marginBottom: "4rem" }}
        >
          <div
            class="card-Banner border-0 me-lg-4 mb-lg-0 mb-4"
            style={{ height: "450px" }}
          >
            <div class="backgroundEffect"></div>
            <div class="pic">
              {" "}
              <img class="" src="/Card13.png" width="270" height="270" alt="" />
            </div>
            <div class="content">
              <div class="d-flex align-items-center justify-content-between mt-5 pb-3">
                <div class="">
                  <Link to="/Product" style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card-Banner border-0 me-lg-4 mb-lg-0 mb-4 "
            style={{ height: "450px" }}
          >
            <div class="backgroundEffect"></div>
            <div class="pic">
              {" "}
              <img
                class="img-fluid"
                src="/Card16.png"
                width="270"
                height="250"
                alt=""
              />
            </div>
            <div class="content">
              <div class="d-flex align-items-center justify-content-between mt-5 pb-3">
                <div class="">
                  <Link to="/Product" style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card-Banner border-0 mb-lg-0 mb-4"
            style={{ height: "450px" }}
          >
            <div class="backgroundEffect"></div>
            <div class="pic">
              {" "}
              <img class="img-fluid" src="/Card18.png" width="270" alt="" />
            </div>
            <div class="content">
              <div class="d-flex align-items-center justify-content-between mt-5 pb-3">
                <div class="">
                  <Link to="/Product" style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
