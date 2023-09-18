import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import SidebarProduct from "./partials/SidebarProduct";
import SpecificationsProduct from "./partials/SpecificationsProduct";
import DescriptionsProduct from "./partials/DescriptionsProduct";
import Footer from "./partials/Footer";
import { addItem } from "../redux/cartSlice";
import "../styles/OneProduct.css";

function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const params = useParams();

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
    dispatch(
      addItem({
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
      })
    );
  };
  for (const otProps in product.otherProperties) {
    console.log(otProps);
  }
  console.log(product.category.name);

  return (
    <>
      <div className="container container-product-page">
        <div className="d-flex justify-content-center">
          <div className="container-left-product-page">
            <div className="row mb-5">
              <div className="col-md-12 col-lg-5 col-xl-4">
                <div className="left-column-product pt-5 d-flex flex-column justify-content-between">
                  <div>
                    <img
                      className="img-product-page"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </div>
              </div>
              <DescriptionsProduct
                name={product.name}
                description={product.description}
                height={product.otherProperties.height}
                width={product.otherProperties.width}
                depth={product.otherProperties.depth}
                price={product.price}
              >
                <button
                  className="btn-product-page fw-semibold p-2"
                  onClick={() => handleAddItem(product)}
                >
                  Add to Cart
                </button>
              </DescriptionsProduct>
            </div>
            {product.category.name !== "accessories" && (
              <div className="pb-5">
                <div className="d-flex mb-4 align-items-center">
                  <p className="m-0 fw-semibold">TECHNICAL SPECIFICATIONS</p>
                  <div className="line-description-product border-bottom w-100"></div>
                </div>
                <SpecificationsProduct
                  height={product.otherProperties.height}
                  width={product.otherProperties.width}
                  depth={product.otherProperties.depth}
                  consumption={product.otherProperties.consumption}
                  efficiency={product.otherProperties.eficiency}
                  nominal={product.otherProperties.nominalPower}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
