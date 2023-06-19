import React from "react";
import "../styles/Footer.css";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";

function Footer() {
  return (
    <div className="footer">
      <div className="fContent">
        <ContactsOutlinedIcon />
        <span className="text">Contact US</span>
        <FacebookOutlinedIcon />
        <span className="text">Follow us on Facebook</span>
      </div>
      <div className="secondBox">
        <MailOutlineOutlinedIcon />
        <span className="text">Email</span>
        <LiveHelpOutlinedIcon />
        <span className="text">FAQ's</span>
      </div>
    </div>
  );
}

export default Footer;
