function AdminInfo() {
  return (
    <div className="admin-info container">
      <h3 className="mt-5 text-center">ADMIN PANEL</h3>
      <p className="pt-5 fs-5">
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
      </div>
    </div>
  );
}

export default AdminInfo;
