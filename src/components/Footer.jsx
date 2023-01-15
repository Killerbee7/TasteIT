import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Dibya Dahal @BC Helsinki.{" "}
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Killerbee7/TasteIT"
          >
            GitHub
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
