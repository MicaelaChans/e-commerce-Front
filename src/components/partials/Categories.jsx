import { Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/CategorySection.css";

function CategoryProducts() {
  return (
    <section className="  categories-section m-0">
      <Row className="row-category">
        <Col xs={12} lg={8} className="categories-image-container p-0">
          <img
            className="categories-section-img1 img-fluid"
            src="https://cdn.thewirecutter.com/wp-content/media/2022/03/pelletstoves-2048px-piazzetta-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="Wood Stove"
          />
        </Col>
        <Col xs={12} lg={4} className="categories-first-div px-5">
          <h2 className="section-first-title fs-3 mt-3">Pellet Stoves</h2>
          <div className="divider-home"></div>
          <p className="section-first-p my-4">
            Experience the future of heating with our state-of-the-art pellet
            stoves. Designed for efficiency and sustainability, these stoves not
            only reduce your carbon footprint but also feature vitroceramic
            glass doors. Witness the serene dance of the flames while ensuring
            no hot air escapes, making your spaces cozier than ever.
          </p>
          <Link to={"/productsPellet"}>
            <Button
              variant="dark"
              className="categories-button-show-products mb-4 mt-4 w-50"
            >
              SHOW PRODUCTS
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="row-category w-100 m-0">
        <Col xs={12} lg={4} className="categories-second-div px-5">
          <h2 className="section-second-title fs-3 mt-3">Wood Stoves</h2>
          <div className="divider-home"></div>
          <p className="section-second-p my-4">
            Embrace tradition combined with innovation through our wood stoves.
            Crafted for those who value the timeless charm of wood heating, our
            stoves provide an eco-friendly solution without compromising on
            aesthetics. The vitroceramic glass doors enhance safety, offering a
            relaxing and intimate view of the fire.
          </p>
          <Link to={"/productsWood"}>
            <Button
              variant="dark"
              className="categories-button-show-products mb-4 mt-4 w-50"
            >
              SHOW PRODUCTS
            </Button>
          </Link>
        </Col>
        <Col xs={12} lg={8} className="categories-image-container p-0">
          <img
            className="categories-img img-fluid"
            src="https://www.stovax.com/wp-content/uploads/Futura-8-Woodburning_02-copy-1.jpg"
            alt="Wood Stove"
          />
        </Col>
      </Row>

      <Row className="row-category">
        <Col xs={12} lg={8} className="categories-image-container p-0">
          <img
            className="categories-section-img img-fluid"
            src="https://www.stovax.com/wp-content/uploads/Huntingdon-30-2-scaled.jpg"
            alt="Wood Stove"
          />
        </Col>
        <Col xs={12} lg={4} className="categories-first-div px-5">
          <h2 className="section-first-title fs-3 mt-3 mt-2">Accessories</h2>
          <div className="divider-home"></div>
          <p className="section-first-p my-4">
            Elevate your heating experience with our curated range of
            accessories. Handpicked for their quality and design, these
            additions ensure that your stoves function at their peak while
            adding a touch of elegance to your decor. Every detail counts when
            it comes to perfect warmth.
          </p>
          <Link to={"/productsAccessories"}>
            <Button
              variant="dark"
              className="categories-button-show-products mb-4 mt-4 w-50"
            >
              SHOW PRODUCTS
            </Button>
          </Link>
        </Col>
      </Row>
    </section>
  );
}

export default CategoryProducts;
