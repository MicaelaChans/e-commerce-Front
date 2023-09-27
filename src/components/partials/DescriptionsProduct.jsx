import { hr } from "date-fns/locale";

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
      <div className="d-flex mb-4 align-items-center justify-content-center fs-5 mt-4 ">
        <p className="m-0 me-3 fw-semibold ">Description</p>
        <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
      </div>
      <p className="m-4">{description}</p>
      <hr className="d-block d-sm-none" />
      {(height || width || depth) && (
        <div className="d-flex mb-4 align-items-center justify-content-center fs-5">
          <p className="m-0 me-3 fw-semibold">Size</p>
          <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
        </div>
      )}
      {(height || width || depth) && (
        <div className="d-flex m-4 flex-column flex-sm-row text-center align-items-center justify-content-between">
          {height && (
            <div className="d-flex">
              <p className="fw-semibold m-0 me-2">Height:</p>
              <p className="m-0">{height}</p>
            </div>
          )}
          {width && (
            <div className="d-flex">
              <p className="fw-semibold m-0 me-2">Width:</p>
              <p className="m-0">{width}</p>
            </div>
          )}
          {depth && (
            <div className="d-flex">
              <p className="fw-semibold m-0 me-2">Depth:</p>
              <p className="m-0">{depth}</p>
            </div>
          )}
        </div>
      )}
      <hr className="d-block d-sm-none" />
      <div className="mb-4">
        <div className="line-description-product border-bottom w-100 d-none d-sm-block"></div>
      </div>
      <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
        <p className="m-0 fw-semibold m-4 fs-4">US$ {price}</p>
        {children}
      </div>
    </div>
  );
}

export default DescriptionsProduct;
