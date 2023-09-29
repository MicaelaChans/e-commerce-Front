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
        <img
          className="img-fluid"
          src="https://cdn.dribbble.com/users/2253180/screenshots/15223174/media/83b2ac94850951a219cda00a3662e526.png"
          alt="admin panel"
        />
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
