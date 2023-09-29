import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "react-bootstrap/Form";
import Footer from "./partials/Footer";
import "../styles/ContactUs.css";

function ContactUs() {
  const serviceID = import.meta.env.VITE_APP_SERVICE_ID;
  const templateID = import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        toast.success("Thank you for communicating with us!");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className="background-contact">
        <div className="container py-sm-4 py-0 px-sm-4 px-5 mt-3 mt-sm-0 text-center text-sm-start">
          <h2 className="mb-3 fs-1">How to Contact Us?</h2>
          <div className="text-about fs-5 ">
            <p>
              You can contact us by whatsapp or by phone, from monday to friday,
              from 9 AM untill 6 PM.
            </p>
            <p>
              Or if you rather, feel free to come personally. You are always
              welcome to our store in Bulevar Artigas 1574, Montevideo.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column px-5 form w-100">
        <div className="container px-0 ">
          <Form ref={form} onSubmit={sendEmail} className="fs-4">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    required
                    name="user_name"
                    className=" border-0 formControl"
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    required
                    name="user_email"
                    className=" border-0 formControl"
                    type="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    name="user_phone"
                    className=" border-0 formControl"
                    type="phone"
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form.Group className="mb-3 border-bottom" controlId="example">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    name="subject"
                    className="border-0  formControl"
                    type="subject"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="example">
                  <Form.Label className="comment-label">Comment *</Form.Label>
                  <Form.Control
                    name="message"
                    required
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>
              </div>
              <div className="col-0 col-md-6" />
              <div className="col-12 col-md-6">
                <div className="form-check fs-6">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  />
                  <label
                    className="form-check-label "
                    htmlFor="flexCheckDefault"
                  >
                    I consent to the terms of the privacy politic.
                  </label>
                </div>
                <Form.Group className="d-flex justify-content-sm-end justify-content-center mt-5">
                  <button
                    className="btn btn-outline-light shadow btnSend fw-semibold"
                    type="submit"
                    value="Send"
                  >
                    Send
                  </button>
                  <ToastContainer className="fs-6" />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
