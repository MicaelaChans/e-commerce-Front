import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import "../styles/RegisterLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("showDeletionToast") === "true") {
      toast.success("Account deleted successfully.");
      localStorage.removeItem("showDeletionToast");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        url: "http://localhost:8000/tokens",
        method: "POST",
        data: { email, password },
      });

      if (response.data.token) {
        const id = jwt(response.data.token).sub;
        const email = jwt(response.data.token).email;
        const role = jwt(response.data.token).role;
        const address = jwt(response.data.token).address;
        dispatch(
          login({
            token: response.data.token,
            id,
            email,
            role,
            address,
          })
        );
        localStorage.setItem("showLoginToast", "true");
        navigate("/");
      } else {
        toast.error(
          response.data.error || "Error logging in. Please try again."
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Error logging in. Please try again.");
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="body-register d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="row rounded-3 shadow container-register">
            <div className="d-none col-md-7 flex-column border d-md-flex justify-content-center image-register-container align-items-center">
              <img
                className="pb-5 image-register"
                src="/assets/drachen_logo_white.png"
                alt="drachen logo"
              />
            </div>
            <div className="col bg-body-tertiary py-5 px-5 px-lg-5 px-md-3 col-md-5 d-flex justify-content-center flex-column">
              <h2 className="mb-5 pt-3">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="d-grid gap-2 pb-3 mt-5">
                    <button
                      className="btn btn-light border border-black rounded-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center mt-3">
                Don't have an account?
                <Link
                  to="/register"
                  style={{
                    color: "blue",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Sign Up
                </Link>
              </p>
              <p className="text-center mt-1">
                Forgot password?
                <Link
                  to="/forgot-password"
                  style={{
                    color: "blue",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Recover password
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
