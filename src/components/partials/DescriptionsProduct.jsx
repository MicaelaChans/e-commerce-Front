function DescriptionsProduct({
  name,
  description,
  height,
  width,
  depth,
  price,
  children,
}) {
  return (
    <div className="col-md-12 col-lg-7 col-xl-8 p-5">
      <h3 className="mb-4">{name}</h3>
      <div className="d-flex mb-4 align-items-center">
        <p className="m-0 me-3 fw-semibold">Description</p>
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <p className="m-4">{description}</p>
      <div className="d-flex mb-4 align-items-center">
        <p className="m-0 me-3 fw-semibold">Size</p>
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <div className="d-flex m-4 justify-content-between">
        <div className="d-flex">
          <p className="fw-semibold m-0 me-1">Height:</p>
          <p className="m-0">{height}</p>
        </div>
        <div className="d-flex">
          <p className="fw-semibold m-0 me-1">Width:</p>
          <p className="m-0">{width}</p>
        </div>
        <div className="d-flex">
          <p className="fw-semibold m-0 me-1">Depth:</p>
          <p className="m-0">{depth}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <div className="d-flex align-items-center">
        <p className="m-0 fw-semibold m-4 fs-4">US$ {price}</p>
        {children}
      </div>
    </div>
  );
}

export default DescriptionsProduct;
