import { Link } from "react-router-dom";

function SidebarIndex() {
  return (
    <div className="pt-5 d-flex flex-column">
      <Link className="text-reset text-decoration-none mb-2 fw-bold">
        - PRESENTATION
      </Link>
      <Link className="text-reset text-decoration-none mb-2">
        - TECHNICAL SPECIFICATIONS
      </Link>
      <Link className="text-reset text-decoration-none">- EXTRA DATA</Link>
    </div>
  );
}

export default SidebarIndex;
