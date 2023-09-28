import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ContactUs from "./components/ContactUs";
import ProductsPellet from "./components/ProductsPellet";
import ProductsWood from "./components/ProductsWood";
import ProductsAccessories from "./components/ProductsAccessories";
import NavBar from "./components/partials/NavBar";
import ProductPage from "./components/ProductPage";
import AboutThisProject from "./components/AboutThisProject";
import { Link } from "react-router-dom";
import MyPurchases from "./components/MyPurchases";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import CheckOut from "./components/CheckOut";
import CreditCard from "./components/partials/CreditCard";
import ThanksForBuy from "./components/ThanksForBuy";

function App() {
  return (
    <div>
      <Link to={"/aboutThisProject"}>
        <button className="rounded-bottom about-this-project-btn">
          About this project
        </button>
      </Link>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/registro" element={<Navigate replace to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/iniciar-sesion"
          element={<Navigate replace to="/login" />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password-page" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contacto" element={<Navigate replace to="/contact" />} />
        <Route path="/aboutThisProject" element={<AboutThisProject />} />
        <Route
          path="/sobreElProyecto"
          element={<Navigate replace to="/aboutThisProject" />}
        />
        <Route path="/productsWood" element={<ProductsWood />} />
        <Route path="/productsPellet" element={<ProductsPellet />} />
        <Route path="/productsAccessories" element={<ProductsAccessories />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/my-purchases" element={<MyPurchases />} />
        <Route path="/thanks-for-buying" element={<ThanksForBuy />} />
        <Route
          path="/check-Out"
          element={
            <CheckOut>
              <CreditCard />
            </CheckOut>
          }
        />
        <Route path="/credit" element={<CreditCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
