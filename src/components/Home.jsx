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
      <ProductsList />
      <Footer />
    </>
  );
}

export default Home;
