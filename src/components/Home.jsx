import Hero from "./partials/Hero";
import ScrollingSection from "./partials/ScrollingSection";
import Footer from "./partials/Footer";
import ProductsList from "./ProductsList";
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
      <div className="container"></div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti vero
        dicta corrupti quo reprehenderit, necessitatibus fugiat excepturi
        repellat culpa recusandae impedit sequi ab, laborum, porro quos
        dignissimos explicabo doloribus animi?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nam
        maiores dignissimos. Sequi perspiciatis quas adipisci temporibus ex
        eligendi ut ad laboriosam et incidunt, dolor officia, facere quam, quo
        a?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
        similique, ratione repellendus, quaerat provident rem iusto illo
        delectus consequatur voluptate illum! Nulla minus sequi debitis, ea
        repellat officiis sunt quod.
      </div>
      <ProductsList />
      <Footer />
    </>
  );
}

export default Home;
