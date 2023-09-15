import Hero from "./partials/Hero";
import ScrollingSection from "./partials/ScrollingSection";
import Footer from "./partials/Footer";
import ProductsList from "./partials/ProductsList";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Categories from "./partials/Categories";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user) return navigate("/iniciar-sesion");
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("showSuccessToast") === "true") {
        toast.success("Successful login!");
        localStorage.removeItem("showSuccessToast");
    }
}, []);

  return (
    <>      
      <Hero />
      <ScrollingSection />
      <Categories />
      <div className="my-5 text-center">
        <h1 className="mb-4 pt-5">Warm hearts create warm spaces</h1>
        <h5 className=" mt-3 pb-5">In Drachen we want your house to become a home</h5>
      </div>
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default Home;
