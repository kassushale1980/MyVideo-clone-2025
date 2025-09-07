import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <ul className="footer-social">
        <li><FacebookOutlinedIcon /></li>
        <li><InstagramIcon /></li>
        <li><TwitterIcon /></li>
        <li><YouTubeIcon /></li>
      </ul>
      <div className="footer_left">
        <div className="footer-links">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-lang">
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      <div className="footer_right">
        <p>© 2025 Netflix Clone. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
