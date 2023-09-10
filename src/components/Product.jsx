import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productSlice";


function Product() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    const listProducts = async () => {
    const response = await axios({
      method: "GET",
      url: "http://localhost:8000/products"
    });
    dispatch(getProducts(response.data))
    }; 
    listProducts();
  },[])

 const firstCategory = products.filter((product)=>product.category.name == "wood");
 const secondCategory = products.filter((product)=>product.category.name == "pellet");
 const thirdCategory = products.filter((product)=>product.category.name == "accessories");

 console.log(firstCategory[0].image)
 
  return (
    <div className="container">
      
      <div className="row mt-3">
        <h2>Wood stoves</h2> 
        {firstCategory.map((product, id = product.id)=>(
          <div key={id} className="col-3 mt-3 text-center">
           <h6 >{product.name}</h6 >
           <img src={product.image} alt={product.name} style={{width:"150px"}}/>
         </div>
        ))}
      </div>
      <div className="row mt-5">
        <h2>Pellet stoves</h2> 
        {secondCategory.map((product, id = product.id)=>(
          <div key={id} className="col mt-3 text-center">
           <h6 >{product.name}</h6>
           <img src={product.image} alt={product.name} style={{width:"150px"}}/>
         </div>
        ))}
      </div>
      <div className="row mt-5">
        <h2>Accesories</h2> 
        {thirdCategory.map((product, id = product.id)=>(
          <div key={id} className="col mt-3 text-center">
           <h6>{product.name}</h6>
           <img src={product.image} alt={product.name} style={{width:"150px"}}/>
         </div>
        ))}
      </div>
      
    </div>
  );
}
export default Product;
