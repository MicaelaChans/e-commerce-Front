import { Link } from "react-router-dom";

function AdminInfo() {
  return (
    <div className="admin-info container">
      <h3 className="mt-5 text-center text-sm-start">ADMIN PANEL</h3>
      <p className="pt-3 text-center text-sm-start  px-sm-0">
        In this e-commerce platform, we provide an administrator panel dashboard
        that allows the user to delete, update, or create products, categories,
        and customers. Additionally, they can monitor the status of orders and
        make necessary modifications.
      </p>
      <div className="py-5">
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="/adminPanel.jpg" alt="admin panel" />
        </div>

        <div className="border rounded-3 shadow mt-3">
          <p className="p-3 my-0 text-center">
            You can accees to admin panel by clicking{" "}
            <Link to="https://e-commerce-admin-bice-rho.vercel.app/">
              here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;
