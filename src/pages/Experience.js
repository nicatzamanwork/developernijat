import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#292a30">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2021"
          iconStyle={{ background: "#202126", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Azerbaijan State Oil and Industry university
          </h3>
          <p>Bachelor</p>
          <p>Electronics, Telecommunication and Radiotechnology Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2023"
          iconStyle={{ background: "#202126", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Azerbaijan State Oil and Industry university
          </h3>
          <p>Master</p>
          <p>Computer Information Systems Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#202126", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Code Academy</h3>
          <p>Advanced Front End </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2020"
          iconStyle={{
            background: "#202126",
            color: "#fff",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Youth Development Career Center
          </h3>
          <p>Junior Developer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#202126", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ozgun Yapi Industrial Company Azerbaijan Department
          </h3>
          <p>Junior Web Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
