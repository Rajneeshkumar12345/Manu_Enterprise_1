import React from "react";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MarkunreadTwoToneIcon from "@mui/icons-material/MarkunreadTwoTone";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Form has been Submitted");
    const { name,phone, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value,
    };
    console.log(conFom);
  };
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{
                backgroundColor: "#8e918f",
                marginTop: "4rem",
                marginBottom: "0 rem",
              }}
            >
              <h2
                className="h1-responsive font-weight-bold text-center  text-white"
                style={{ marginTop: "3rem" }}
              >
                Contact us
              </h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 text-left text-white">
                    <h5
                      style={{
                        marginBottom: "15px",
                        margin: "auto",
                        textAlign: "centre",
                        width: "200px",
                      }}
                    >
                      Registered Office :-
                    </h5>

                    <div className="address" style={{ marginTop: "20px" }}>
                      <p
                        style={{
                          textAlign: "centre",
                          margin: "auto",
                          width: "50px",
                        }}
                      >
                        <BusinessTwoToneIcon fontSize="large" />{" "}
                      </p>
                      <p style={{ marginTop: "5px", marginLeft: "65px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam, est.
                      </p>
                      <p
                        style={{
                          textAlign: "centre",
                          margin: "auto",
                          width: "50px",
                        }}
                      >
                        <LocalPhoneTwoToneIcon fontSize="large" />
                      </p>
                      <p style={{ marginTop: "15px", marginLeft: "10rem" }}>
                      + 9196200
                      98499/98288
                       
                      </p>
                      <p
                        style={{
                          textAlign: "centre",
                          margin: "auto",
                          width: "50px",
                        }}
                      >
                        <MarkunreadTwoToneIcon fontSize="large" />
                      </p>
                      <p style={{ marginTop: "15px", marginLeft: "13rem" }}>
                       info@mtrak.in
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label className="form-label text-white" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label text-white"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone"
                        className="form-label text-white"
                        >
                          Phone
                        </label>
                        <input
                          className="form-control"
                          type="phone"
                          id="phone"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label text-white"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          required
                        />
                      </div>
                      <button className="btn btn-danger" type="submit" style={{marginBottom:"4rem"}}>
                        {formStatus}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
