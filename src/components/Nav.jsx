import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/" >Add Recipe</NavLink></li>
                <li><NavLink to="recipe">Recipes</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;