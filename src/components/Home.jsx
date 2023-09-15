import Hero from "./partials/Hero";
import ScrollingSection from "./partials/ScrollingSection";
import Footer from "./partials/Footer";
import ProductsList from "./partials/ProductsList";
import { Link } from "react-router-dom";
import Categories from "./partials/Categories";

function Home() {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user) return navigate("/iniciar-sesion");
  // }, []);

  return (
    <>
      <Hero />
      <ScrollingSection />
      <Categories />
      <div className="my-5 text-center">
        <h1 className="mb-4 pt-5">Warm hearts create warm spaces</h1>
        <h5 className=" mt-3 pb-5">Drachen will make your hose become a home</h5>
      </div>
      <Footer />
    </>
  );
}

export default Home;
