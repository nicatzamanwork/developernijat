import React from "react";
import "../styles/Footer.css";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/nct.zmn/">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/nicat.zaman.12/">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/nicat-zaman/">
          <LinkedIn />
        </a>
      </div>
      <p>&copy; 2023 created by Nijat Zaman</p>
    </div>
  );
}

export default Footer;
