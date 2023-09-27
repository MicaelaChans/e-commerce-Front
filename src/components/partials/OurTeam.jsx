import { Link } from "react-router-dom";
import teamMembers from "../../assets/teamMembers.js";

function OurTeam() {
  return (
    <div className="row my-3 ">
      {teamMembers.map((member) => (
        <div key={member.key} className="col-6 col-md-4 col-lg-4 my-2">
          <div className="d-flex justify-content-center align-items-center text-center">
            <img
              src={member.profImg}
              alt="photoStaff"
              className="photoStaff hop"
            />
          </div>

          <div className="member-info">
            <h5 className="mt-3">{member.name}</h5>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <h5 className="gap-2">
              <Link to={member.linkLi} target="_blank">
                <i
                  className="fa-brands fa-xl fa-linkedin"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
              <Link to={member.linkGi} target="_blank">
                <i
                  className="fa-brands fa-xl fa-github"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurTeam;
