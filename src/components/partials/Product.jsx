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

  return (
    <div className="container">
      <div className="row">
        <div className="text-center col-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: US${product.price}</p>
          <button className="btn">Add to Cart</button>
        </div>
        <div className="col-6 one-product-background">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
    </div>
  );
}

export default Product;
