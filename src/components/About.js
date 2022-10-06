import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function About() {
  return (
    <>

    <div className="About" style={{backgroundColor: "#8e918f"}}>
     
    <div
        className="container"
        style={{
          marginTop: "4.7rem",
          
        }}
      >
        <div className="row">
          <div className="col">
            <div className="card" style={{ backgroundColor: "#a4bfac" }}>
              <div className="card-body" style={{marginTop:"3rem", marginBottom:"3rem", marginLeft:"3rem"}}>
                <div className="row ">
                  <div className="col " >
                    <h4>About me</h4>
                    <div className="card-text " style={{ textAlign:'justify'}}>
                      <ReactReadMoreReadLess
                        charLimit={600}
                        readMoreText="Read more ▼"
                        readLessText="Read less ▲"
                      >
                        Found in year 2022, with a vision to provide the best
                        and value for money vehicle safety, Personal Security
                        and tracking solution, including Hardware, Software,
                        Consultancy and Technical Support. Fuelled by the
                        passion and experience of our dedicated team, MTRAK
                        (Manu Enterprises) helps our clients solve their
                        vehicle/personal security related challenges day in and
                        day out. From strategy to execution, our disciplined yet
                        flexible approach starts and ends with our clients.
                        Their success is our satisfaction. It's why we wake up
                        in the morning; it's why our clients sleep well at
                        night. Backed by a Highly Experienced and Expert team
                        from Vehicle Safety and Security field, MTRAK is
                        servicing many Fleet operators leverage its experience
                        in providing quality service through the right
                        technology placements. The combination of dedicated and
                        highly skilled professionals, robust development and
                        delivery methodologies and thorough understanding of the
                        issues related to the Vehicle/Goods/Personal safety
                        scenario make us the ideal partner for all your
                        technical needs.
                      </ReactReadMoreReadLess>
                    </div>
                  </div>
                  <div className="col-sm-6 text-right mt-5">
                    <img
                      className="img-fluid"
                      src="ME_Logo.png"
                      alt="sans"
                      width="600rem"
                      height="600rem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
     
    </>
  );
}
