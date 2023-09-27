import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import SpecificationsProduct from "./partials/SpecificationsProduct";
import DescriptionsProduct from "./partials/DescriptionsProduct";
import Footer from "./partials/Footer";
import { addItem } from "../redux/cartSlice";
import "../styles/OneProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "react-simple-star-rating";
function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const params = useParams();
  const [rating, setRating] = useState(1);
  useEffect(() => {
    const getOneProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/products`,
      });
      dispatch(getProducts(response.data));
    };
    getOneProduct();
  }, [params.id]);
  const productFilter = products.filter((item) => item.id == params.id);
  const product = productFilter[0];
  const handleAddItem = (item) => {
    if (item.stock > 0) {
      dispatch(
        addItem({
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.price,
          quantity: 1,
          rating: [0],
          stock: item.stock,
          addMessage: "none",
        })
      );
      toast.success(`${product.name} successfully added to cart.`);
    } else {
      toast.error("This product is out of stock");
    }
  };
  function calculatingRatingAverage(rating) {
    if (rating.length === 0) {
      return "This product has no rating";
    }

    const ratingAverage = rating.reduce((acc, rating) => acc + rating, 0);
    return Math.floor(ratingAverage / rating.length);
  }

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <div className="container container-product-page">
        <div className="d-flex justify-content-center">
          <div className="container-left-product-page">
            <div className="row mb-3">
              <div className="col-md-12 col-lg-5 col-xl-4">
                <div className=" pt-5 d-flex flex-column  justify-content-between">
                  <div className="d-flex justify-content-center">
                    <img
                      className="mx-lg-5  img-product-page"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </div>
              </div>
              <DescriptionsProduct
                name={product.name}
                rating={
                  <Rating
                    readonly={true}
                    initialValue={calculatingRatingAverage(product.rating)}
                    size={29}
                  />
                }
                description={product.description}
                height={product.otherProperties.height}
                width={product.otherProperties.width}
                depth={product.otherProperties.depth}
                price={product.price}
              >
                <button
                  className="btn btn-light btn-product-page p-2"
                  onClick={() => handleAddItem(product)}
                >
                  Add to Cart
                </button>
              </DescriptionsProduct>
            </div>
            {product.category.name !== "accessories" && (
              <div className="pb-5">
                <div className="d-flex mb-4 justify-content-center align-items-center">
                  <p className="m-0 fw-semibold fs-5">
                    TECHNICAL SPECIFICATIONS
                  </p>
                  <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
                </div>
                <SpecificationsProduct
                  height={product.otherProperties.height}
                  width={product.otherProperties.width}
                  depth={product.otherProperties.depth}
                  consumption={product.otherProperties.consumption}
                  efficiency={product.otherProperties.efficiency}
                  nominal={product.otherProperties.nominalPower}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default ProductPage;
