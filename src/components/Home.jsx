import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Home.module.css"

const Home = () => {
    return (
    <div className={classes.gridhome}>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          
      <Link to="recipe">Browse Fav Recipe</Link>
      
      </div>
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
      <div className={classes.wrapper}>
        <div className={classes.card}>
      <Link to="addrecipe">Add Your Recipe</Link>
      
      </div>
      </div>
      <div>
      
      </div>
      <div>
      
      </div><div>
      
      </div>
      <div className={classes.wrapper}>
        <div className={classes.card}>
      <a href="https://www.bc.fi/?gclid=Cj0KCQiA_P6dBhD1ARIsAAGI7HD793guAnDG3TVbSj_uhikScin3ANdW7qZ8Dw6Lp1ZcsijxcslxDCIaAjfpEALw_wcB">Visit BCH</a>
      
      </div>
      </div>
      <div>
      
      </div>
      
     
    </div>
    );
};

export default Home;