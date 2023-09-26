import Footer from "./partials/Footer";
import "../styles/AboutThisProyect.css";
import OurTeam from "./partials/OurTeam";
import TechAndTools from "./partials/TechAndTools";
import AdminInfo from "./partials/AdminInfo";

function AboutThisProject() {
  return (
    <>
      <div className="background-aboutProject">
        <div className="container pt-sm-5">
          <h2 className="mb-3 fs-1">What is DRACHEN?</h2>
          <div className="text-about">
            <p>
              Drechen is an e-commerce app developed as our final project of a
              Coding Bootcamp at Hack Academy, an educational institution that
              specializes in programming courses. The Bootcamp is an immersive
              and intensive full-time course that lasts for three months and
              takes more than 600 hours of coding. Its main goal is to prepare
              the students to be Full Stack Developers.
            </p>
            <p>
              This final project aims to showcase the application of the diverse
              technologies learned throughout the Bootcamp.
            </p>
            <p>
              The web app was developed over a period of three weeks by a team
              of six students, totaling approximately 150 hours of work per
              student. It is a fully functional app designed to be user-friendly
              and easy to navigate.
            </p>
            <p>
              In this section, we give you some details of the behind-the-scenes
              journey of creating Drachen and gain a comprehensive understanding
              of the development process behind our e-commerce app.
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
