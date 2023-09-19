import Footer from "./partials/Footer";
import "../styles/AboutThisProyect.css";
import OurTeam from "./partials/OurTeam";
import TechAndTools from "./partials/TechAndTools";
import AdminInfo from "./partials/AdminInfo";

function AboutThisProject() {
  return (
    <>
      <div className="background-aboutProject">
        <div className="container pt-5">
          <h2 className="mb-3 fs-1">What is DRACHEN?</h2>
          <div className="text-about fs-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              commodi eos? Hic molestiae, cum harum voluptatibus ab a vitae,
              suscipit qui beatae totam expedita quo nesciunt ipsa quis
              accusantium illo?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              numquam cupiditate dolorem non doloremque tempore incidunt, eos
              dignissimos. Provident ea dolorum modi ratione natus eveniet
              adipisicing elit. Laboriosam neque voluptatum nesciunt iusto harum
              inventore, consectetur iste quos earum distinctio vitae cumque
              optate mollitia sed aperiam nam veritatis?
            </p>
          </div>
        </div>
      </div>
      <div className="info-about py-5">
        <TechAndTools />
      </div>
      <hr className="container" />
      <AdminInfo />
      <div className="team-about d-flex flex-column align-items-center justify-content-center text-center p-5">
        <h3 className="my-3">OUR TEAM</h3>
        <OurTeam />
      </div>
      <Footer />
    </>
  );
}

export default AboutThisProject;
