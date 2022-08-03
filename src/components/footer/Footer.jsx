import {
  Copyright,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./footer.css";

export default function Footer() {
  const links = [
    "Audio and Subtitles",
    "Audio Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notice",
    "Cookie Preferences",
    "Impressure",
    "Contact Us",
  ];

  return (
    <footer className="footerBox">
      <div className="socialLinks">
        <div className="socialLinksBox">
          <a href="https://www.facebook.com/mirfanfad/">
            <Facebook className="iconLink" />
          </a>
          <a href="https://www.instagram.com/mirfanfad/">
            <Instagram className="iconLink" />
          </a>
          <a href="https://twitter.com/mirfanfad">
            <Twitter className="iconLink" />
          </a>
          <a href="https://www.linkedin.com/in/mirfanfad/">
            <LinkedIn className="iconLink" />
          </a>
          <a href="https://github.com/mirfanfad">
            <GitHub className="iconLink" />
          </a>
        </div>
      </div>
      <div className="footerlinks">
        <ul className="linksList">
          {links.map((link) => (
            <li className="link" key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footerCopyRight">
        <Copyright className="copyrightIcon"/>
        <span className="copyrightText">
          {" "}
          2021 Netflix Clone made with React JS by Muhammad Irfan Fadilah
        </span>
      </div>
    </footer>
  );
}
