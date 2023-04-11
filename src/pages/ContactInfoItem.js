import React from "react";
import "../styles/Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function ContactInfoItem() {
  return (
    <div>
      <div className="ContactInfoItem">
        {" "}
        <CallIcon className="icon" />
        +994 50 386 68 29
      </div>
      <div className="ContactInfoItem">
        {" "}
        <EmailIcon className="icon" />
        webdevelopernicat@gmail.com
      </div>
      <div className="ContactInfoItem">
        {" "}
        <LocationOnIcon className="icon" />
        Baku, Azerbaijan
      </div>
    </div>
  );
}

export default ContactInfoItem;
