function TechAndTools() {
  return (
    <div className="container">
      <h3 className="text-center text-sm-start mt-5">TECHNOLOGIES & TOOLS</h3>
      <div className="mt-4 text-center text-sm-start ">
        <p className=" pt-1 px-5 px-sm-0">
          Throughout the coding bootcamp, we delved into a wide range of
          technologies encompassing both backend and front end development. We
          also gained hands-on experience with databases and leveraged practical
          tools to optimize our workflow.{" "}
        </p>
        <p>
          To ensure efficient task allocation within our team, we utilized
          Trello as our project management tool.
        </p>
        <p className=" text-center text-sm-start px-5 px-sm-0">
          The project was divided into three sprints, with Github serving as our
          primary collaboration platform. Discord played a crucial role in
          facilitating seamless communication throughout the development
          process.{" "}
        </p>
        <p>
          For this project, we handpicked the following set of tools to boost
          our productivity.
        </p>
      </div>

      <div
        id="staff-section"
        className="row d-flex justify-content-center align-items-center text-center gap-5 pt-5 px-5 px-sm-0 m-0 "
      >
        <div className="icon-tech ">
          <h6>
            <i className="fa-brands fa-3x fa-react"></i>
          </h6>
          <small>React</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-bootstrap"></i>
          </h6>
          <small>Bootstrap</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-css3"></i>
          </h6>
          <small>CSS3</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-github"></i>
          </h6>
          <small>GitHub</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-js"></i>
          </h6>
          <small>JavaScript</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-node-js"></i>
          </h6>
          <small>Node.Js</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-envira"></i>
          </h6>
          <small>MongoDB</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-figma"></i>
          </h6>
          <small>Figma</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-trello"></i>
          </h6>
          <small>Trello</small>
        </div>
        <div className="icon-tech">
          <h6>
            <i className="fa-brands fa-3x fa-discord"></i>
          </h6>
          <small>Discord</small>
        </div>
      </div>
    </div>
  );
}

export default TechAndTools;
