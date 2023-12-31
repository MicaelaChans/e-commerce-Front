import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/forgot-password`, { email });

      if (response.data.message) {
        toast.success(response.data.message);
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("Error sending email. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Error sending email. Please try again.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="forgot-password-container p-5 d-flex justify-content-center align-items-center">
        <div className="forgot-password-panel p-5 rounded shadow">
          <h2 className="text-center mb-4">Forgot Password</h2>
          <p className="text-center mb-4">
            Enter your email to receive reset instructions
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-dark" type="submit">
                Send Reset Email
              </button>
            </div>
          </form>
          <div className="mt-2 d-flex">
            <Link to={"/login"} className="link-register">
              &larr; Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
