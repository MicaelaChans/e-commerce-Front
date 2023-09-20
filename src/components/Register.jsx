import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/RegisterLogin.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `http://localhost:8000/register`,
      data: { firstname, lastname, email, phone, address, password },
    });

    if (response.data == "existent email already") {
      setWarningMsg("There's an existing account with this email");
    } else if (response.data == "existent phone already") {
      setWarningMsg("There's an existing account with this phone");
    } else {
      setWarningMsg("");
      navigate("/login");
    }
  };

  return (
    <div className="body-register m-5 d-flex  align-items-center">
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "250px" }}
      >
        <div className="row  rounded-3 shadow container-register ">
          <div className=" d-none col-md-7 flex-column border d-md-flex justify-content-center image-register-container  align-items-center ">
            <img
              className="pt-5 image-register"
              src="/assets/drachen_logo_white.png"
              alt="drachen logo"
            />
          </div>
          <div className="col bg-body-tertiary py-5 px-5 px-lg-5 px-md-3 col-md-5 d-flex justify-content-center flex-column">
            <h2 className="mb-3 pt-3">Sign up!</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
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
                  type="tel"
                  pattern="[0-9]{9}"
                  name="phone"
                  className="form-control"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-center mt-1">
              I'm already signed up. Go to{" "}
              <Link
                to={"/login"}
                
                style={{ color: "blue", textDecoration: "none" }}
              >
                Login
              </Link>
            </p>
            <p className="text-danger text-center">{warningMsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
