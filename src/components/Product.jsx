import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productSlice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



   
  


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
 const cantFirstCategory = firstCategory.length;
 const cantSecondCategory = secondCategory.length;
 const cantThirdCategory = thirdCategory.length;
 
 
 const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


  return (
    <div className="container">    
     <div className="row my-5">
        <h2>Wood stoves</h2> 
        <Carousel responsive={responsive}>    
        {firstCategory.map((product, id = product.id)=>(
          <div key={id} className="mt-3">
           <h6 style={{marginLeft:"35%"}}>{product.name}</h6 >
           <img src={product.image} alt={product.name} style={{width:"85%"}}/>
         </div>     
        ))}     
         </Carousel>
      </div>
      <div className="row my-5">
        <h2>Pellet stoves</h2> 
        <Carousel responsive={responsive}>   
        {secondCategory.map((product, id = product.id)=>(
          <div key={id} className="mt-3">
           <h6 style={{marginLeft:"35%"}}>{product.name}</h6>
           <img src={product.image} alt={product.name} style={{width:"85%"}}/>
         </div>
        ))}
        </Carousel>
      </div>
      <div className="row my-5">
        <h2>Accesories</h2> 
        <Carousel responsive={responsive} > 
        
        {thirdCategory.map((product, id = product.id)=>(
          <div key={id} className="mt-3">
           <h6 style={{marginLeft:"35%"}}>{product.name}</h6>
           <img src={product.image} alt={product.name} style={{width:"85%"}}/>
         </div>
        ))}
        
        </Carousel>
      </div>
    </div>
  );
}
export default Product;
