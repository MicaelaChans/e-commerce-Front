import Form from "react-bootstrap/Form";
import Footer from "./Footer";
import "../../styles/ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="background-contact">
        <div className="container pt-5 text-center text-sm-start">
          <h2 className="mb-3 fs-1">How to Contact Us?</h2>
          <div className="text-about fs-5 ">
            <p>
              You can contact us by whatsapp or by phone, from monday to friday, from 9 AM untill 6 PM.
            </p>
            <p>
              Or if you rather, feel free to come personaly. You are always welcome to our store in Bulevar Artigas 1574, Montevideo.
            </p>    
          </div>
        </div>
      </div>
      <div className="d-flex flex-column px-5 form w-100">
        <div className="container px-0 px-sm-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form className="fs-3">
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    className=" border-0 formControl"
                    type="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    className=" border-0 formControl"
                    type="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className=" border-0 formControl"
                    type="phone"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form className="fs-3 ">
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    className="border-0  formControl"
                    type="subject"
                  />
                </Form.Group>
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label className="comment-label pb-1">Comment</Form.Label>
                  <Form.Control
                    className=" border-0 formControl"
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-0 col-md-6" />
            <div className="col-12 col-md-6">
              <div className="form-check fs-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  I consent to the terms of the privacy politic.
                </label>
              </div>
              <Form.Group className="d-flex justify-content-sm-end justify-content-center mt-5">
                <button
                  className="btn btn-outline-light shadow btnSend fw-semibold"
                  type="button"
                >
                  Send
                </button>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
