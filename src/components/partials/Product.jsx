import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/productSlice";
import { useParams } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const params = useParams();
  useEffect(() => {
    const getOneProduct = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/products/64ff1f522c68a86939652721",
      });
      console.log("llegamos");
      console.log(response.data);
      dispatch(getProduct(response.data));
    };
    getOneProduct();
  }, []);

  return (
    <div>
      <h1>lelgamos a product</h1>
      <h2>algo</h2>
    </div>
  );
}

export default Product;
