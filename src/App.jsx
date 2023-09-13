import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/partials/ContactUs";
import Cart from "./components/Cart";
import ProductsPellet from "./components/ProductsPellet"
import ProductsWood from "./components/ProductsWood";
import NavBar from "./components/partials/NavBar";
import ProductPage from "./components/ProductPage";
import AboutThisProject from "./components/AboutThisProject";
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
        <Route path="/aboutThisProject" element={<AboutThisProject />} />
        <Route
          path="/sobreElProyecto"
          element={<Navigate replace to="/aboutThisProject" />}
        />
        <Route path="/productsWood" element={<ProductsWood />} />
        <Route path="/productsPellet" element={<ProductsPellet />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
