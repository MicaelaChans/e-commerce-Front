import React, { useState } from "react";
import axios from "axios";
import "../styles/ResetPassword.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const token = new URLSearchParams(window.location.search).get("token");

  const handleResetPassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/reset-password",
        {
          token,
          newPassword,
        }
      );
      if (response.data.message) {
        setSuccessMessage(response.data.message);
      } else if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container full-height mt-5">
      <div className="d-flex justify-content-center">
        <div className="form-box">
          <h2 className="text-center mb-5">Reset Your Password</h2>

          <div className="form-group my-4">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary btn-block"
            onClick={handleResetPassword}
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          {errorMessage && <p className="mt-3 text-danger text-center">{errorMessage}</p>}
          {successMessage && <p className="mt-3 text-success text-center">{successMessage}</p>}

          <Link
            to={"/login"}
            className="link-register"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;