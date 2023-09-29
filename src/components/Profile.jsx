import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./partials/Footer";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [orders, setOrders] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editedUser, setEditedUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
  });
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${apiUrl}/users/${user.id}`,
          headers: {
            Authorization: "Bearer " + (user && user.token),
          },
        });
        const detailedUser = response.data;
        if (detailedUser) {
          const {
            firstname = "",
            lastname = "",
            address = "",
            email = user.email,
          } = detailedUser;
          setEditedUser({ firstname, lastname, address, email });
        } else {
          toast.error(
            "Failed to load user details. Response data is missing or undefined."
          );
        }
      } catch (error) {
        toast.error("Error fetching user details. Please try again.");
      }
    };

    const fetchOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/users/${user.id}/orders`,
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });

      if (response.data) {
        setOrders(response.data);
      } else {
        toast.error(
          "Failed to load orders. Response data is missing or undefined."
        );
      }
    };
    if (user) {
      fetchUserDetails();
      fetchOrders();
    }
  }, [user]);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation don't match.");
      return;
    }

    try {
      const response = await axios({
        method: "POST",
        url: `${apiUrl}/update-password`,
        data: {
          userId: user.id,
          oldPassword,
          newPassword,
        },
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else if (response.data && response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("Error updating password. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred while updating the password.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${apiUrl}/users/${user.id}`,
        data: editedUser,
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully.");
      } else if (response.data && response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("Error updating profile. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${apiUrl}/users/${user.id}`,
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });

      if (response.status === 200 || response.status === 204) {
        localStorage.setItem("showDeletionToast", "true");
        navigate("/login");
      } else if (response.data && response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("Error deleting account. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the account.");
    }
  };

  return (
    <>
      <div className="profile-section">
        <div className="container">
          <div className="header-profile d-flex justify-content-between align-items-center">
            <h2>Profile</h2>
            <small className="fs-6">{user ? user.email : ""}</small>
          </div>

          <div className="orders-section section-content mb-5 shadow border  rounded-3">
            <h3 className="mb-0">My Orders</h3>
            <div className="divider-profile"></div>
            <ul className="list-group">
              {orders.map((order) => (
                <li key={order._id} className="list-group-item">
                  <strong>Order ID:</strong> {order._id}
                  <br />
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                  <br />
                  <strong>Status:</strong> {order.state}
                  <br />
                  <strong>Number of Products:</strong> {order.products.length}
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <div className="edit-profile-section my-5 section-content shadow border  rounded-3">
            <h3 className="mb-0">Edit Profile</h3>
            <div className="divider-profile"></div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={editedUser.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={editedUser.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={editedUser.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex justify-content-start mt-5 ">
              <button onClick={handleUpdateProfile} className="btn btn-primary">
                Update Profile
              </button>
            </div>
          </div>
          <div className="change-password-section section-content shadow border  rounded-3">
            <h3 className="mb-0">Change Password</h3>
            <div className="divider-profile"></div>
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
              <div className="d-flex justify-content-start mt-5">
                <button type="submit">Update Password</button>
              </div>
            </form>
          </div>
          <ToastContainer position="top-right" />

          <div className=" justify-content-start mt-5">
            <h3 className="mb-0">Danger zone</h3>
            <hr className="danger-zone-hr mb-0" />
            <button
              onClick={() => setShowDeleteModal(true)}
              className="btn  delete-account  btn-primary mt-4"
            >
              Delete Account
            </button>
          </div>
        </div>

        <Modal
          className="d-flex justify-content-center align-items-center"
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Account Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Close
            </Button>
            <Button variant="danger" onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
