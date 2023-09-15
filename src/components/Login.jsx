/*function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:8000/tokens",
      method: "POST",
      data: { password, username },
    });
    //console.log(response.data.token);
    if (response.data.token) {
      dispatch(login(response.data));
      navigate("/");
    } else {
      navigate("/errorPage?msg=Error en login");
    }
  };

  return (
    <div className="mt-4 rounded shadow p-4 container">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;*/

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/RegisterLogin.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*await axios({
       method : "POST",
       url: `http://localhost:8000/register`, 
       data: {firstname,lastname,email,phone,adress,password},
    });  */
    navigate("/");
  };
  return (
    <div className="body-register m-5 d-flex  align-items-center">
      <div
        className="container  d-flex justify-content-center"
        style={{ marginTop: "250px" }}
      >
        <div className="row rounded-3 shadow container-register ">
          <div className="  d-none col-md-7 flex-column border d-md-flex justify-content-center image-register-container  align-items-center ">
            <img
              className="pt-5 image-register"
              src="/assets/drachen_logo_white.png"
              alt="drachen logo"
            />
          </div>
          <div className="col bg-body-tertiary py-5 px-5 px-lg-5 px-md-3 col-md-5 d-flex justify-content-center flex-column">
            <h2 className="mb-5 pt-3">Login</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="email"
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
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2 pb-3  mt-5">
                <button
                  className="btn btn-light border border-black rounded-5"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
            <p className="text-center mt-3">
              Don´t have an account yet? Register{" "}
              <Link
                className="link-register"
                to={"/register"}
                style={{ color: "blue", textDecoration: "none" }}
              >
                here
              </Link>
              .
            </p>
            <p className="text-center">
              Forgot your password?{" "}
              <button
                className="link-register"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                Recover password
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
