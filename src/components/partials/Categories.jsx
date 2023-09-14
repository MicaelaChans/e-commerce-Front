import { Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryProducts() {
  return (
    <section className="categories-section m-0 p-0">
      <Row className="g-0 row-category">
        <Col xs={12} md={8} className="categories-image-container">
          <img
            className="categories-section-img1 img-fluid"
            src="https://cdn.thewirecutter.com/wp-content/media/2022/03/pelletstoves-2048px-piazzetta-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="algo"
          />
        </Col>
        <Col
          xs={12}
          md={4}
          className="categories-first-div d-flex flex-column align-items-center"
        >
          <h2 className="section-first-title ps-5 my-5">
            Wood Stoves and Heaters
          </h2>
          <p className="section-second-p fs-3 ps-5 my-5">
            Our products are not only more efficient and environmentally
            friendly but also feature vitroceramic glass doors that provide a
            relaxing and cozy view of the fire while preventing the escape of
            hot air.
          </p>
          <Link to="/products/pellet" className="mt-5">
            <Button variant="dark" className="categories-button-show-products">
              Show Products
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="row g-0 row-category">
        <Col
          xs={12}
          md={4}
          className="categories-second-div d-flex flex-column align-items-center"
        >
          <h2 className="section-second-title ps-5 my-5">
            Wood Stoves and Heaters
          </h2>
          <p className="section-second-p fs-3 ps-5 my-5">
            Our products are not only more efficient and environmentally
            friendly but also feature vitroceramic glass doors that provide a
            relaxing and cozy view of the fire while preventing the escape of
            hot air.
          </p>
          <Link to="/products/pellet" className="mt-5">
            <Button variant="dark" className="categories-button-show-products">
              Show Products
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={8} className="categories-image-container">
          <img
            className="categories-img"
            src="https://www.stovax.com/wp-content/uploads/Futura-8-Woodburning_02-copy-1.jpg"
            alt="algo"
          />
        </Col>
      </Row>

      <Row className="row g-0 row-category">
        <Col xs={12} md={8} className="categories-image-container">
          <img
            className="categories-section-img"
            src="https://www.stovax.com/wp-content/uploads/Huntingdon-30-2-scaled.jpg"
            alt="algo"
          />
        </Col>
        <Col
          xs={12}
          md={4}
          className="categories-first-div d-flex flex-column align-items-center"
        >
          <h2 className="section-first-title ps-5 my-5">
            Wood Stoves and Heaters
          </h2>
          <p className="section-second-p fs-3 ps-5 my-5">
            Our products are not only more efficient and environmentally
            friendly but also feature vitroceramic glass doors that provide a
            relaxing and cozy view of the fire while preventing the escape of
            hot air.
          </p>
          <Link to="/products/pellet" className="mt-5">
            <Button variant="dark" className="categories-button-show-products">
              Show Products
            </Button>
          </Link>
        </Col>
      </Row>
    </section>
  );
}

export default CategoryProducts;
