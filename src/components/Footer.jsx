import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="app_footer" id="footer">
      <div>
        <div className="footer_app_logo">HARVIS</div>
        <div className="footer_mid_section">
          <div className="footer_copy_right">
            <BiCopyright />
            <span>2022</span>{""}
          </div>
          <Link to={"/privacy"} className="footer_privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="footer_media_links">
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
