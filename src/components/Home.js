import React from "react";

export default function Home() {
  return (
    <>
      <div className="home" style={{ 
            
            marginBottom: "2.5rem",
            marginLeft: "2.5rem",
            marginRight: "2.5rem",marginTop:'7rem'
            
            }}>
        <div
          className="card-group"
            
        >
          <div className="card" >
            <img
              src="Product1.jpg"
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
      </div>
    </>
  );
}
