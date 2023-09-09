import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBarr from "./partials/NavBar";
import ScrollingSection from "./partials/ScrollingSection";
function Home() {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user) return navigate("/iniciar-sesion");
  // }, []);

  return (
    <>
      <NavBarr />
      <ScrollingSection />
      <div className="container">
       
      </div>
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
      <img
        src="https://imgs.elpais.com.uy/dims4/default/888d428/2147483647/strip/true/crop/931x640+15+0/resize/2880x1980!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2019%2F07%2F12%2F5d28957b4b184.jpeg"
        alt=""
      />
      <img
        src="https://imgs.elpais.com.uy/dims4/default/888d428/2147483647/strip/true/crop/931x640+15+0/resize/2880x1980!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2019%2F07%2F12%2F5d28957b4b184.jpeg"
        alt=""
      />
    </>
  );
}

export default Home;
