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
      <div>
        <img
          className="img-fluid"
          src="https://cdn.dribbble.com/users/2253180/screenshots/15223174/media/83b2ac94850951a219cda00a3662e526.png"
          alt="admin panel"
        />
      </div>
      <div className="py-3 fs-5">
        <p className="fw-semibold">
          To test our Admin dashboard, you can follow these steps:
        </p>
        <ol>
          <li>
            Visit our admin{" "}
            <a className="text-black fw-semibold" href="">
              login page.
            </a>
          </li>
          <li>
            <div className="d-flex">
              Use the email address "
              <p className="fst-italic m-0">admin@gmail.com</p>" as your
              username.
            </div>
          </li>
          <li>
            <div className="d-flex">
              Input "<p className="fst-italic m-0">admin</p>" as the password.
            </div>
          </li>
          <li>Click on the login button or submit the form.</li>
        </ol>
        <p>
          Now you can access the admin dashboard with the provided login data.
          Happy testing!
        </p>
      </div>
    </div>
  );
}

export default AdminInfo;
