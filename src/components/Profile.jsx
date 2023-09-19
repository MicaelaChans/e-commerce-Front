import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./partials/Footer";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "../styles/Profile.css";

function Profile() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [orders, setOrders] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8000/users/${user.id}/orders`)
        .then((response) => {
          if (response.data) {
            setOrders(response.data);
          } else {
            toast.error(
              "Failed to load orders. Response data is missing or undefined."
            );
          }
        })
        .catch((error) => {
          toast.error("Error fetching orders. Please try again.");
        });
    }
  }, [user]);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation don't match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/update-password",
        {
          userId: user.id,
          oldPassword,
          newPassword,
        }
      );

      toast.success(response.data.message);

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Error updating password. Please try again."
      );
    }
  };

  return (
    <>
      <div className="profile-section">
        <div className="container">
          <div className="header-profile d-flex justify-content-between align-items-center">
            <h2>Profile</h2>
            <small>{user ? user.email : ""}</small>
          </div>

          <div className="orders-section section-content mb-5">
            <h3>Your Orders</h3>
            <ul className="list-group">
  {orders.map(order => (
    <li key={order._id} className="list-group-item">
      <strong>Order ID:</strong> {order._id}<br />
      <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}<br />
      <strong>Status:</strong> {order.state}<br />
      <strong>Number of Products:</strong> {order.products.length}<br />
      {/* Aquí puedes expandir para mostrar detalles de los productos si los tienes */}
    </li>
  ))}
</ul>
          </div>

          <div className="change-password-section section-content">
            <h3>Change Password</h3>
            <form onSubmit={handleChangePassword}>
              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary">
                  Update Password
                </button>
              </div>
            </form>
          </div>
          <ToastContainer position="top-right" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
