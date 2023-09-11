import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productSlice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../App.css"

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
    <div className="container" >    
     <div className="row my-5">
        <h2>Wood stoves</h2> 
        <Carousel responsive={responsive}>    
        {firstCategory.map((product, id = product.id)=>(
          <div key={id} >
            <div  className="mt-4 border rounded-3 mx-3 p-4 bg-white shadow card-product" >
              <img className="image-product" src={product.image} alt={product.name} />
              <Link className="btn btn-secondary link-product">Go to page</Link>  
           </div> 
           <h5 className="text-center mt-2" >{product.name} - {product.otherProperties.nominalPower}KW</h5>
           <hr  className="hr-product mt-3"/> 
           <div className="d-flex justify-content-center mt-3 p-sizes-product"> 
             <p className="text-center mx-2">Height: {product.otherProperties.height}</p>
             <p className="text-center mx-2 "> Width: {product.otherProperties.width}</p>
             <p className="text-center mx-2"> Depth: {product.otherProperties.depth}</p>
           </div>       
         </div>
        ))}     
        </Carousel>
     </div>
      <div className="row my-5">
        <h2>Pellet stoves</h2> 
        <Carousel responsive={responsive}>   
        {secondCategory.map((product, id = product.id)=>(
          <div key={id} >
          <div  className="mt-4 border rounded-3 mx-3 p-4 bg-white shadow card-product" >
            <img className="image-product" src={product.image} alt={product.name} />
            <Link className="btn btn-secondary link-product">Go to page</Link>  
         </div> 
         <h5 className="text-center mt-2" >{product.name} - {product.otherProperties.nominalPower}KW</h5>
         <hr  className="hr-product mt-3"/> 
         <div className="d-flex justify-content-center mt-3 p-sizes-product"> 
           <p className="text-center mx-2">Height: {product.otherProperties.height}</p>
           <p className="text-center mx-2 "> Width: {product.otherProperties.width}</p>
           <p className="text-center mx-2"> Depth: {product.otherProperties.depth}</p>
         </div>       
       </div>
        ))}
        </Carousel>
      </div>
      <div className="row my-5">
        <h2>Accesories</h2> 
        <Carousel responsive={responsive} >        
        {thirdCategory.map((product, id = product.id)=>(
          <div  key={id} >
            <div  className="mt-4 border rounded-3 mx-3 p-4 bg-white shadow card-product" >
              <img className="image-product" src={product.image} alt={product.name} />
              <Link className="btn btn-secondary link-product">Go to page</Link>  
            </div> 
            <h5 className="text-center mt-2" >{product.name}</h5>
            <hr  className="hr-product mt-3"/> 
            <div className="d-flex justify-content-center mt-3 p-sizes-product"> 
              <p className="text-center mx-2">{product.description}</p>        
            </div>       
          </div>        
        ))}       
        </Carousel>
      </div>
    </div>
  );
}
export default Product;
