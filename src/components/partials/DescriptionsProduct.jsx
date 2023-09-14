function DescriptionsProduct({ name, description, height, width, depth }) {
  return (
    <div className="col-md-12 col-xxl-8 p-5 pe-0">
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
      <div className="d-flex mb-4 align-items-center">
        <p className="m-0 me-3 fw-semibold">Colors</p>
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <div className="m-4">
        <div className="circle-color-product"></div>
      </div>
      <div className="mb-4">
        <div className="line-description-product border-bottom w-100"></div>
      </div>
    </div>
  );
}

export default DescriptionsProduct;
