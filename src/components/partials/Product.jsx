import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/productSlice";
import { useParams } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const params = useParams();
  
  useEffect(() => {
    const getOneProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/products/${params.id}`,
      });    
      dispatch(getProduct(response.data));
    };
    getOneProduct();
  }, []);

   console.log(product)
   return  (
    <div>
      <h1>{product.name}</h1>
      <h2>algo</h2>
    </div>
  )
}

export default Product;
