import "../styles/AboutUs.css";
import Footer from "../components/partials/Footer";
function AboutUs() {
  return (
    <>
      <div className="background-about">
        <div className="container pt-5">
          <h2 className="mb-3 fs-1">About Us</h2>
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
        <div className="container">
          <h3 className="my-3">MISSION AND VISION</h3>
          <div className="text-about mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              beatae eaque quo quam, sapiente aperiam quidem nostrum laborum
              nobis vel sunt iure tempora aut dolorem repellat! Natus facere et
              quae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt maxime, eos a fugit ad sunt. Minus saepe debitis modi
              perferendis, a, tenetur cum iure recusandae nostrum atque, odio
              optio laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatem fuga rerum cupiditate assumenda maiores provident
              molestiae magni autem! Vel temporibus deserunt magni reiciendis
              magnam, maiores recusandae perspiciatis ipsa culpa?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
