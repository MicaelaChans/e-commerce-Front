import React, { useState } from "react";
import axios from "axios";
import "../styles/ResetPassword.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const token = new URLSearchParams(window.location.search).get("token");

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/reset-password`, {
        token,
        newPassword,
      });
      if (response.data.message) {
        toast.success(response.data.message);
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-container">
      <ToastContainer />
      <div className="container full-height mt-5">
        <div className="d-flex justify-content-center">
          <div className="form-box rounded shadow">
            <h2 className="text-center mt-2 mb-4">Reset Your Password</h2>
            <div className="form-group mb-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
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
              className="mt-2 btn btn-dark w-100 btn-block"
              onClick={handleResetPassword}
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
            <div className="d-flex mt-2">
              <Link to={"/login"} className="link-register">
                &larr; Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
