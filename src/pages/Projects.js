import React from "react";
import ProjectItem from "../components/ProjectItem";
import projectFirst from "../assets/page6.PNG";
import projectThird from "../assets/proje4.PNG";
import projectForth from "../assets/proje2.PNG";
import projectFive from "../assets/proje5.PNG";
import projectSix from "../assets/proje3.PNG";
import projectSecond from "../assets/proje1.PNG";
import "../styles/Project.css";
import { NavLink } from "react-bootstrap";
function Projects() {
  return (
    <div className="projects">
      <h1>My Projects in Use</h1>
      <div className="projectList">
        <a
          href="https://employment.az/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Employment Website" image={projectFirst} />
        </a>
        <a
          href="https://bitrix.butagrup.com.tr/?lang=en"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Bitrix24 Partner Website" image={projectSecond} />
        </a>
        <a
          href="https://www.ozguninsaat.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <ProjectItem
            name="Ozgun Yapi Industrial Company Website"
            image={projectThird}
          />
        </a>
        <a
          href="https://hd.butagrup.com.tr/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Help Desk Service Website" image={projectForth} />
        </a>
        <a
          href="https://kaizen.az/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Kaizen Blog Website" image={projectFive} />
        </a>
        <a
          href="https://vtp.butagrup.az/bala/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Virtual Internship Website" image={projectSix} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
