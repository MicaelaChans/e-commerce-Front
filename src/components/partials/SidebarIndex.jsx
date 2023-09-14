import { Link } from "react-router-dom";

function SidebarIndex() {
  return (
    <div className="pt-5 d-flex flex-column">
      <Link>PRESENTATION</Link>
      <Link>TECHNICAL SPECIFICATIONS</Link>
      <Link>EXTRA DATA</Link>
    </div>
  );
}

export default SidebarIndex;
