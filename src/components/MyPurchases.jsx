import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MyPurchases.css";
import { useDispatch, useSelector } from "react-redux";
import { format, formatDistanceToNow } from "date-fns";
import Footer from "./partials/Footer";


function Register() {
const user = useSelector((state) => state.user);
const products = useSelector((state) => state.products);

const [orders, setOrders] = useState([]);
const productsOfUser = [];


//esto en realidad no va, el usuario se obtiene llamando a la store una vez logueado
useEffect(() => {
  const getOrders = async () => {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8000/orders`,
    });
    setOrders(response.data);
  };
  getOrders(); 
},[])

if(orders.length > 0){
  for(let i=0; i<orders.length; i++){   
    if(orders[i].user.id == user.id){ 
      for(let j=0; j<orders[i].products.length; j++){
        productsOfUser.push({orderId: orders[i].id, date: orders[i].createdAt, state: orders[i].state, id: orders[i].products[j].id, name: orders[i].products[j].name, image: orders[i].products[j].image, price: orders[i].products[j].price })
      }      
    }
  }
}


console.log(products)
return orders[0] && ( (
  <div>
  <div className="container mb-5" style={{marginTop:"160px"}}>
   <h1 className="mx-3">My Purchases</h1>
   <div className="row">
    <div className="col">
      <div className="mt-5  border rounded-3 shadow d-flex align-items-center justify-content-between p-3">
        
        <i className="bi bi-star-fill star-icon "></i>
        <h5 className="mb-0 mx-3">You have purchased {productsOfUser.length} products</h5>
        <i className="bi bi-star-fill star-icon "></i>
        </div>
     
      {productsOfUser.map((product, id = product.id) => (
      <div key={id} className="mt-3 border rounded-3 shadow p-3">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="mb-0"> {format(new Date(product.date), 'MMMM dd yyyy')}</p>
            <p className="mb-0 order-reference">Order: <span style={{fontWeight:"600"}}>{product.orderId}</span> </p>
          </div>      
          <hr/>      
        <div className="d-flex align-items-center justify-content-between">         
          <div className="d-flex align-items-center" >
          <img className="product-image" src={product.image} alt={product.name} />
            <div className="d-flex flex-column">
              <p className="mb-2 mx-2">{product.state}</p>
              <p className="mb-0 mx-2 product-name">{product.name}</p>
            </div>
          </div>
          <div>
          <p className="mb-0">Price:</p>
          <p className="mb-0 product-name">USD {product.price}</p>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <button className="btn buy-button mb-1">Buy again</button> 
            <button className="btn rate-button">Rate</button> 
          </div>
        </div>      
      </div>
      ))}
    </div>
   </div>
   <div className="row mt-5">
   <h2>Other products that you might like</h2>
   <div className="col"></div>
   <div className="col"></div>
   <div className="col"></div>
   </div>
  </div>

  <Footer/>
  </div>
  ));
}

export default Register;