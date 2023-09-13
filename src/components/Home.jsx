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
      <div className="section-white mb-5">
        <div className="container">
          <h2 className="my-4 lh-base">
            DESCUBRA EL SISTEMA DE CALEFACCIÓN MÁS CONVENIENTE PARA SU HOGAR,
            CASA O APARTAMENTO
          </h2>
          <p className="subtitle pb-5 lh-base">
            DRACHEN con sus equipos calefactores y proveeduría de pellets de
            madera, pone a tu alcance uno de los sistemas de calefacción más
            eficientes, de bajo costo operativo, desarrollado y ampliamente
            difundido desde hace años en países europeos.
          </p>
          <div className="box-cyan mt-5 pb-5 px-3">
            <h3 className="fs-2">El confort ideal.</h3>
            <div className="row">
              <div className="col-12 col-md-4 d-flex flex-column">
                <div className="text-center mt-3 px-3 mx-2 flex-grow-1 d-flex flex-column justify-content-between">
                  <div className="content-icon mt-5">
                    <img
                      src="/icon-calefaccion.png"
                      alt="Pellet"
                      className="icon-calefaccion mt-3"
                    />
                  </div>
                  <h4 className="mt-5 fs-5">
                    PELLET DE MADERA,
                    <br />
                    LA REVOLUCIÓN
                    <br />
                    EN CALEFACCIÓN
                  </h4>
                  <p className="my-5">
                    La eficiencia necesaria para lograr la atmósfera perfecta en
                    cualquiera de tus ambientes.
                  </p>

                  <Link className="p-3 px-5 btn-green text-decoration-none">
                    <span>CONOCÉ MÁS &rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 d-flex flex-column">
                <div className="text-center mt-3 px-3 mx-2 flex-grow-1 d-flex flex-column justify-content-between">
                  <div className="content-icon mt-5">
                    <img
                      src="/icon-sist-mile.png"
                      alt="Estufa a leña"
                      className="icon-sist-mile mt-3"
                    />
                  </div>
                  <h4 className="mt-5 fs-5">
                    LEÑA,
                    <br />
                    EL SISTEMA MILENARIO
                    <br />
                    LLEVADO A LA PERFECCIÓN
                  </h4>
                  <p className="my-5">
                    La tecnología puesta al servicio de la calefacción, para la
                    mejor distribución del calor y aprovechamiento de la leña.
                  </p>

                  <Link className="p-3 px-5 btn-green text-decoration-none">
                    <span>CONOCÉ MÁS &rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 d-flex flex-column">
                <div className="text-center mt-3 px-3 mx-2 flex-grow-1 d-flex flex-column justify-content-between">
                  <div className="content-icon mt-5">
                    <img
                      src="/icon-calefaccion.png"
                      alt="Accesorios"
                      className="icon-calefaccion mt-3"
                    />
                  </div>
                  <h4 className="mt-5 fs-5">
                    ACCESORIOS PARA EQUIPOS,
                    <br />
                    EL COMPLEMENTO IDEAL
                    <br />
                    PARA TU SISTEMA
                  </h4>
                  <p className="my-5">
                    Potencia y personaliza tu experiencia de calefacción con los
                    accesorios adecuados.
                  </p>

                  <Link className="p-3 px-5 btn-green text-decoration-none">
                    <span>CONOCÉ MÁS &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
