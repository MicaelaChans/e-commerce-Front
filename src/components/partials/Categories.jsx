function CategoryProducts() {
  return (
    <section className="categories-section m-0 p-0">
      <div className="container">
        <div className="row row-col-2 row-category">
          <div className="col-9 categories-image-container">
            <img
              className="categories-section-img"
              src="https://cdn.thewirecutter.com/wp-content/media/2022/03/pelletstoves-2048px-piazzetta-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
              alt="algo"
            />
          </div>

          <div className="col-3 categories-first-div-img m-0 p-0">
            <h2 className="section-first-title p-3">
              Wood Stoves and Heaters.
            </h2>
            <p className="section-first-p p-3">
              Our products, in addition to being more efficient and
              environmentally friendly, feature vitroceramic glass doors that
              provide a relaxing and cozy view of the fire while preventing the
              escape of hot air.
            </p>
            <div className="m-4">
              <button className="categories-button-show-products m-5">
                Show Products
              </button>
            </div>
          </div>

          <div className="col-3 categories-second-div-img m-0 p-0">
            <h2 className="section-second-title p-3">
              Wood Stoves and Heaters.
            </h2>
            <p className="section-second-p p-3">
              Our products, in addition to being more efficient and
              environmentally friendly, feature vitroceramic glass doors that
              provide a relaxing and cozy view of the fire while preventing the
              escape of hot air.
            </p>
            <div className="m-4">
              <button className="categories-button-show-products">
                Show Products
              </button>
            </div>
          </div>

          <div className="col-9 p-0 categories-image-container">
            <img
              className="categories-img"
              src="https://www.stovax.com/wp-content/uploads/Futura-8-Woodburning_02-copy-1.jpg"
              alt="algo"
            />
          </div>

          <div className="row m-0 p-0">
            <div className="col-9 categories-image-container">
              <img
                className="categories-section-img-3"
                src="https://www.stovax.com/wp-content/uploads/Huntingdon-30-2-scaled.jpg"
                alt="algo"
              />
            </div>
            <div className="col-3 categories-first-div-img m-0 p-0">
              <h2 className="section-first-title p-3">
                Wood Stoves and Heaters.
              </h2>
              <p className="section-first-p p-3">
                Our products, in addition to being more efficient and
                environmentally friendly, feature vitroceramic glass doors that
                provide a relaxing and cozy view of the fire while preventing
                the escape of hot air.
              </p>
              <div className="m-4">
                <button className="categories-button-show-products m-5">
                  Show Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryProducts;
