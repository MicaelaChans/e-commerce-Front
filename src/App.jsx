import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/partials/ContactUs";
import Cart from "./components/Cart";
import ProductsList from "./components/partials/ProductsList";
import NavBar from "./components/partials/NavBar";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/registro" element={<Navigate replace to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/iniciar-sesion"
          element={<Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contacto" element={<Navigate replace to="/contact" />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/sobreNosotros"
          element={<Navigate replace to="/aboutUs" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/carrito" element={<Navigate replace to="/cart" />} />
        <Route path="/productsList" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
