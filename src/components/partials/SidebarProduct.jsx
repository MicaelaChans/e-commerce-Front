import SidebarIndex from "./SidebarIndex";

function SidebarProduct({ name, price, image }) {
  return (
    <div className="d-none d-xxl-block p-4 border-start right-column-product">
      <div className="details-right-column-product d-flex">
        <div className="m-2">
          <h5 className="text-uppercase">{name}</h5>
          <p className="fw-semibold">US$ {price}</p>
        </div>
        <img
          className="image-right-column-product ms-5"
          src={image}
          alt={name}
        />
      </div>
      <SidebarIndex />
    </div>
  );
}

export default SidebarProduct;
