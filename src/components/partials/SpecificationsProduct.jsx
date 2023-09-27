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
      <ul className="ul-product-page m-0 p-0">
        <li className="li-product-page p-2 d-flex">
          <p className="m-0">Height:</p>
          <p className="m-0">{height}</p>
        </li>
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0">Width:</p>
          <p className="m-0">{width}</p>
        </li>
        <li className="li-product-page p-2 d-flex">
          <p className="m-0">Depth:</p>
          <p className="m-0">{depth}</p>
        </li>
      </ul>
      <ul className="ul-product-page m-0 p-0">
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0">Consumption:</p>
          <p className="m-0">{consumption}</p>
        </li>
        <li className="li-product-page p-2 d-flex">
          <p className="m-0">Efficiency:</p>
          <p className="m-0">{efficiency}</p>
        </li>
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0">Nominal Power:</p>
          <p className="m-0">{nominal}</p>
        </li>
      </ul>
      <ul className="ul-product-page m-0 p-0">
        <li className="li-product-page p-2 d-flex">
          <p className="m-0">Log size:</p>
          <p className="m-0">50cm</p>
        </li>
        <li className="li-product-page-light p-2 d-flex">
          <p className="m-0">Closed combustion:</p>
          <p className="m-0">Yes</p>
        </li>
        <li className="li-product-page p-2 d-flex">
          <p className="m-0">Clean burn:</p>
          <p className="m-0">Yes</p>
        </li>
      </ul>
    </div>
  );
}

export default SpecificationsProduct;
