import Footer from "./partials/Footer";
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
      <div className="info-about d-flex flex-column align-items-center justify-content-center text-center p-5">
        <h3 className="my-5 fs-3">TECHNOLOGIES & TOOLS</h3>
        <div className="w-75 mb-5 lh-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            beatae eaque quo quam, sapiente aperiam quidem nostrum laborum nobis
            vel sunt iure tempora aut dolorem repellat! Natus facere et quae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maxime, eos a fugit ad sunt. Minus saepe debitis modi perferendis,
            a, tenetur cum iure recusandae nostrum atque, odio optio laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            voluptatem fuga rerum cupiditate assumenda maiores provident
            molestiae magni autem! Vel temporibus deserunt magni reiciendis
            magnam, maiores recusandae perspiciatis ipsa culpa?
          </p>
        </div>
        <div className="d-flex justify-content-center align-self-center flex-wrap gap-2 m-0 col-xl-6 col-md-8 col-sm-10 col-12 mb-5">
          <div className="icon-tech">
            <h6>
              <i className="fa-brands fa-2x fa-bootstrap"></i>
            </h6>
            <small>Bootstrap</small>
          </div>
          <div className="icon-tech">
            <h6>
              <i className="fa-brands fa-2x fa-css3"></i>
            </h6>
            <small>CSS</small>
          </div>
          <div className="icon-tech">
            <h6>
              <i className="fa-brands fa-2x fa-figma"></i>
            </h6>
            <small>Figma</small>
          </div>
          <div className="icon-tech">
            <h6>
              <i className="fa-brands fa-2x fa-github"></i>
            </h6>
            <small>GitHub</small>
          </div>
          <div className="icon-tech">
            <h6>
              <i class="fa-brands fa-2x fa-js"></i>
            </h6>
            <small>JavaScript</small>
          </div>
          <div className="icon-tech">
            <h6>
              <i className="fa-brands fa-2x fa-envira"></i>
            </h6>
            <small>MongoDB</small>
          </div>
          <div className="icon-tech">
            <h6>
              <i class="fa-brands fa-react"></i>
            </h6>
            <small>React</small>
          </div>
        </div>
      </div>
      <div className="team-about d-flex flex-column align-items-center justify-content-center text-center p-5">
        <h4 className="my-5">OUR TEAM</h4>
        <div className="row mb-5">
          <div className="col-6 col-md-4 col-lg-2 my-4">
            <img src="" alt="photoStaff" />
            <div className="member-info">
              <h5 className="mt-4">Agustín Martínez</h5>
              <p>Full Stack Developer</p>
            </div>
            <div>
              <h5>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </h5>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-4">
            <img src="" alt="photoStaff" />
            <div className="member-info">
              <h5 className="mt-4">Facundo Centurión</h5>
              <p>Full Stack Developer</p>
            </div>
            <div>
              <h5>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </h5>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-4">
            <img src="" alt="photoStaff" />
            <div className="member-info">
              <h5 className="mt-4">Federico Mier</h5>
              <p>Full Stack Developer</p>
            </div>            
            <div>
              <h5>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </h5>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-4">
            <img src="" alt="photoStaff" />
            <div className="member-info">
              <h5 className="mt-4">Martín Gestido</h5>
              <p>Full Stack Developer</p>
            </div>            
            <div>
              <h5>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </h5>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-4">
            <img src="" alt="photoStaff" />
            <div className="member-info">
              <h5 className="mt-4">Mauro de Nava</h5>
              <p>Full Stack Developer</p>
            </div>            
            <div>
              <h5>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </h5>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-4">
            <img src="" alt="photoStaff" />
            <div className="member-info">
              <h5 className="mt-4">Micaela Chans</h5>
              <p>Full Stack Developer</p>
            </div>            
            <div>
              <h5>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutThisProject;
