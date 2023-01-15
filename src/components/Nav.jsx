import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="addrecipe">Add Recipe</NavLink>
        </li>
        <li>
          <NavLink to="recipe">Browse Recipes</NavLink>
        </li>
        <li>
          <NavLink to="about">About Taste IT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
