import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h2>Error 404 - La página no existe</h2>
      <h3>Do you want to go Home?</h3>
      <Link to="/">
        <i className="bi bi-house"></i>
      </Link>
    </div>
  );
}

export default NotFound;
