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
      data: {firstname,lastname,email,phone,adress,password},
    });  
    navigate("/login")    
  };

  return (
    <div className="body-register d-flex  align-items-center">
    <div className="container d-flex justify-content-center" >
      <div className="row  rounded-5 shadow container-register ">
        <div className=" d-none col-md-7 flex-column border d-md-flex justify-content-center image-register-container  align-items-center " >
            <img className="pt-5 image-register" src="./src/assets/drachen_logo_white.png" alt="drachen logo" />         
        </div>
        <div className="col py-5 px-5 px-lg-5 px-md-3 col-md-5 d-flex justify-content-center flex-column">         
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
              <div className="d-grid gap-2 pb-3  mt-5">
              <button className="btn btn-light border rounded-5" type="submit">Sign up</button>

              </div>
              
            </form>
          
          

        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Register;
