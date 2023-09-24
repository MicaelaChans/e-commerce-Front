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
              Drachen es el resultado de un arduo trabajo de dos meses y medio,
              nacido como nuestro proyecto final de curso. Durante este tiempo,
              nos sumergimos en el mundo de la programación, guiados por el
              profesor Luis Romero, quien despertó una pasión y un interés en el
              mundo de la programacion. Hablando en nombre de todo el equipo,
              puedo afirmar que este curso ha sido una experiencia
              enriquecedora. Consultando con mis compañeros, calculamos que
              dedicamos un promedio de más de 600 horas a la práctica de
              ejercicios y proyectos, tanto de forma individual como en
              colaboración. Este proyecto representó un desafío considerable, ya
              que implicó organizarnos internamente, aplicar los conocimientos
              adquiridos en el curso y resolver juntos las dudas y obstáculos
              que surgieron en el camino. Esto resultó en un fortalecimiento de
              nuestros conocimientos, ya que algunos de nosotros reforzamos
              nuestros saberes al explicar cómo superar los desafíos, mientras
              que otros adquirieron nuevos conocimientos al aprender de sus
              compañeros. Además de impulsar nuestro crecimiento en el ámbito de
              la programación, este proyecto nos permitió evolucionar como
              personas. En momentos de dificultad y presión debido a las fechas
              límite, aprendimos a cultivar la paciencia, a manejar el estrés de
              manera más efectiva y a reaccionar de manera más positiva en
              situaciones tensas. Entonces, ¿qué es exactamente Drachen? Drachen
              es el fruto de nuestra búsqueda de un producto y la creación de un
              diseño web en torno a ese producto. Invertimos más de 200 horas de
              trabajo en equipo y empleamos una variedad de tecnologías y
              herramientas para lograr este resultado, entre las cuales se
              incluyen MongoDB, React, CSS, GitHub, JavaScript, Node.js, Figma,
              Trello y Discord, junto con otros frameworks que fueron esenciales
              para el éxito de nuestro proyecto.
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
