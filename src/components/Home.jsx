import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Home.module.css"
import videoHome from "../images/coverr-flipping-chicken-on-grill-9341-1080p.mp4"

const Home = () => {
    return (
      <div>
      <div>
      <video className={classes.homevideo} autoplay muted loop id="myVideo">
     <source autoplay loop muted src={videoHome}  type="video/mp4"/>
     </video>
     </div>
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
    </div>
    
    );
};

export default Home;