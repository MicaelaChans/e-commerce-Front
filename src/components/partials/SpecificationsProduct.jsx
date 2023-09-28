function SpecificationsProduct({
  height,
  width,
  depth,
  consumption,
  efficiency,
  nominal,
}) {
  return (
    <div className="d-sm-block d-lg-flex justify-content-around text-center text-sm-start">
      <ul className="ul-product-page m-0 p-0 ">
        <li className="li-product-page p-2 d-flex">
          <p className="m-0 specifications">Height:</p>
          <p className="m-0 specifications">{height}</p>
        </li>
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0 specifications">Width:</p>
          <p className="m-0 specifications">{width}</p>
        </li>
        <li className="li-product-page p-2 d-flex">
          <p className="m-0 specifications">Depth:</p>
          <p className="m-0 specifications">{depth}</p>
        </li>
      </ul>
      <ul className="ul-product-page m-0 p-0">
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0 specifications">Consumption:</p>
          <p className="m-0 specifications">{consumption}</p>
        </li>
        <li className="li-product-page p-2 d-flex">
          <p className="m-0 specifications">Efficiency:</p>
          <p className="m-0 specifications">{efficiency}</p>
        </li>
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0 specifications">Nominal Power:</p>
          <p className="m-0 specifications">{nominal}</p>
        </li>
      </ul>
      <ul className="ul-product-page m-0 p-0">
        <li className="li-product-page p-2 d-flex">
          <p className="m-0 specifications">Log size:</p>
          <p className="m-0 specifications">50cm</p>
        </li>
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0 specifications">Closed combustion:</p>
          <p className="m-0 specifications">Yes</p>
        </li>
        <li className="li-product-page p-2 d-flex">
          <p className="m-0 specifications">Clean burn:</p>
          <p className="m-0 specifications">Yes</p>
        </li>
      </ul>
    </div>
  );
}

export default SpecificationsProduct;
