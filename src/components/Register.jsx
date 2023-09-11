import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();    
   await axios({
      method : "POST",
      url: `http://localhost:8000/register`, 
    });  
    navigate("/login")    
  };

  return (
    <div className="container" style={{width:"80%"}}>
      <div className="row border rounded-5 shadow">
        <div className=" col-sm-7 d-flex justify-content-center border align-items-center">
          <div>
          <img className="pt-5" src="./src/assets/drachen_logo_black.png" alt="drachen logo" />

          </div>

        </div>
        <div className="col col-sm-5 d-flex justify-content-center flex-column align-items-center">
          
            <h2 className="my-5">Sign up!</h2>
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
                  />
              </div>
              <div className="mb-3">
              <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="mb-3">
              <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
              </div>
              <div className="mb-3">
              <input
                    type="text"
                    name="adress"
                    className="form-control"
                    placeholder="adress"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
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
                  />
              </div>
              <button type="submit">Sign up</button>
            </form>
          
          

        </div>
      </div>
    </div>
    
   
  );
}

export default Register;
