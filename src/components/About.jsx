import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>TasteIT- Built on React</h1>
      <h4>
        This is a project for react by Margit Tennosaar, Business College
        Helsinki.User can add recipe from their country and also, browse recipes
        from the database.{" "}
      </h4>
      <h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Killerbee7/TasteIT"
        >
          Click to be redirected to github repo
        </a>
      </h3>
      <h3>To run the app </h3>
      <p>npm i (to install node modules)</p>
      <p>npm start</p>
      <p>npm run server(in new terminal)</p>
      <h3>Build using:</h3>* HTML * CSS * React JS * Node
    </div>
  );
};

export default About;
