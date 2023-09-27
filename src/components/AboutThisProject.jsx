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
          <h1 style={{ fontSize: "3.5rem" }} className="text-center my-5">
            About this project
          </h1>
        </div>
      </div>
      <div className="info-about py-5">
        <div className="container">
          <h3 className="text-center text-sm-start">WHAT IS DRACHEN?</h3>
          <div className="mb-5 mt-4 text-center text-sm-start">
            <p>
              Drechen is an e-commerce app developed as our final project of a
              Coding Bootcamp at Hack Academy, an educational institution that
              specializes in programming courses.{" "}
            </p>
            <p>
              The Bootcamp is an immersive and intensive full-time course that
              lasts for three months and takes more than 600 hours of coding.
              Its main goal is to prepare the students to be Full Stack
              Developers.
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
          </div>
          <hr />
        </div>
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
