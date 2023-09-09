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

  console.log(products)

 

  return (
    <div className="container">
      <h1>PRODUCTS</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default Product;
