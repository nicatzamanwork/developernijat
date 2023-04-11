import React from "react";
import "../styles/Home.css";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import ReorderIcon from "@mui/icons-material/Reorder";
// import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Home() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Nijat</h2>
        <div className="prompt">
          <p>
            I'm a front-end developer with 1.5 years of experience building
            responsive and user-friendly websites using the MERN stack (MongoDB,
            Express, React, and Node.js).<br></br>
          </p>
          <div></div>

          <a href="https://www.linkedin.com/in/nicat-zaman/">
            <LinkedIn />
          </a>
          <a
            href=""
            to="#"
            onClick={() => (window.location = "mailto:nijatlz@code.edu.az")}
          >
            <Email />
          </a>
          <a href="https://github.com/nicatzamanwork">
            <GitHub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <div className="column-left">
          <h2>Front-End</h2>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Redux Toolkit</li>
          <li>Bootstrap</li>
          <li>MaterialUI</li>
          <li> HTML</li>
          <li> CSS</li>
          <li> TypeScript</li>
        </div>
        <div className="column-right">
          <h2>Back-End</h2>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li> MongoDB</li>
          <li>MS SQL</li>
          <li>REST API</li>
        </div>
      </div>
    </div>
  );
}

export default Home;
