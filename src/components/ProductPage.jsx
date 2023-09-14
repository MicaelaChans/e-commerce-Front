import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import SidebarProduct from "./partials/SidebarProduct";
import SpecificationsProduct from "./partials/SpecificationsProduct";
import DescriptionsProduct from "./partials/DescriptionsProduct";
import Footer from "./partials/Footer";

function ProductPage() {
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
  }, [params.id]);

  return (
    <>
      <div className="container-product-page pt-5">
        <div className="d-flex justify-content-center">
          <div className="container-left-product-page">
            <div className="row mb-5">
              <div className="col-md-12 col-xxl-4">
                <div className="left-column-product pt-5 d-flex flex-column justify-content-between">
                  <div>
                    <img
                      className="img-product-page"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <button className="btn-product-page fw-semibold p-2">
                    Add to Cart
                  </button>
                </div>
              </div>
              <DescriptionsProduct
                name={product.name}
                description={product.description}
                // height={product.otherProperties.height}
                // width={product.otherProperties.width}
                // depth={product.otherProperties.depth}
              />
            </div>
            <div className="py-5">
              <div className="d-flex mb-4 align-items-center">
                <p className="m-0 fw-semibold">TECHNICAL SPECIFICATIONS</p>
                <div className="line-description-product border-bottom w-100"></div>
              </div>
              <SpecificationsProduct />
            </div>
          </div>
          <SidebarProduct
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
