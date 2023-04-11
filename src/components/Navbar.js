import React, { useEffect, useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div>
      <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <ReorderIcon></ReorderIcon>
          </button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
