function DescriptionsProduct({
  name,
  rating,
  description,
  height,
  width,
  depth,
  price,
  children,
}) {
  return (
    <div className="col-md-12 col-lg-7 col-xl-8 p-5 text-center text-sm-start">
      <h3 className="m-1 ">{name}</h3>
      <p>{rating}</p>
      <div className="d-flex mb-2 mb-sm-4 align-items-center justify-content-center fs-5 mt-4 ">
        <p className=" me-sm-3 me-0 mb-0 fw-semibold ">Description</p>
        <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
      </div>
      <p className="description">{description}</p>

      {(height || width || depth) && (
        <div className="d-flex mb-2 mb-sm-4 align-items-center justify-content-center fs-5">
          <p className=" me-sm-3 me-0 mb-0 fw-semibold ">Size</p>
          <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
        </div>
      )}
      {(height || width || depth) && (
        <div className="d-flex  flex-column flex-sm-row text-center align-items-center justify-content-between">
          {height && (
            <div className="d-flex m-0 mb-sm-4 ">
              <p className="fw-semibold me-2 description">Height:</p>
              <p className="description">{height}</p>
            </div>
          )}
          {width && (
            <div className="d-flex m-0 mb-sm-4">
              <p className="fw-semibold  me-2 description">Width:</p>
              <p className="description">{width}</p>
            </div>
          )}
          {depth && (
            <div className="d-flex m-0 mb-sm-4">
              <p className="fw-semibold  me-2 description">Depth:</p>
              <p className="description">{depth}</p>
            </div>
          )}
        </div>
      )}

      <div className="mb-sm-4 mb-0">
        <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
      </div>
      <div className="d-flex flex-column flex-sm-row  align-items-center justify-content-center justify-content-sm-start">
        <p className="my-3 my-sm-0 me-0 me-sm-3 fw-semibold  description fs-4">
          US$ {price}
        </p>

        {children}
      </div>
    </div>
  );
}

export default DescriptionsProduct;
