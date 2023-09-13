function DescriptionsProduct({ name, description }) {
  return (
    <div className="col-md-12 col-lg-7 p-5 pe-0">
      <h3 className="mb-4">{name}</h3>
      <div className="d-flex mb-4 align-items-center">
        <p className="m-0 me-3 fw-semibold">Description</p>
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <p className="mb-4">{description}</p>
      <div className="d-flex mb-4 align-items-center">
        <p className="m-0 me-3 fw-semibold">Size</p>
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <div className="d-flex mb-2 justify-content-between">
        <div className="d-flex">
          <p className="fw-semibold me-1">Height:</p>
          <p>Data</p>
          {/* <p>{product.otherProperties.height}</p> */}
        </div>
        <div className="d-flex">
          <p className="fw-semibold me-1">Width:</p>
          <p>Data</p>
          {/* <p>{product.otherProperties.width}</p> */}
        </div>
        <div className="d-flex">
          <p className="fw-semibold me-1">Depth:</p>
          <p>Data</p>
          {/* <p>{product.otherProperties.depth}</p> */}
        </div>
      </div>
      <div className="d-flex mb-4 align-items-center">
        <p className="m-0 me-3 fw-semibold">Colors</p>
        <div className="line-description-product border-bottom w-100"></div>
      </div>
      <div className="mb-4">
        <div className="circle-color-product"></div>
      </div>
      <div className="mb-4">
        <div className="line-description-product border-bottom w-100"></div>
      </div>
    </div>
  );
}

export default DescriptionsProduct;
