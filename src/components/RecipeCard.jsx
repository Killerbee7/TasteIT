import React from "react";
import "./Recipecard.module.css";

import classes from "./Recipecard.module.css"

import { Link } from "react-router-dom";

const RecipeCard = ({ id, flag,name, author, image, desc }) => {
  return (
    <div className={classes.container}>
    <div className={classes.card} key={name}>

            <div className={classes.recipeImage}><img src={image} alt={name} />
                
            </div>
            <div><h3>{name}</h3>  </div>
            <div><h4>By:{author}</h4></div>
            <div><p>{desc}</p></div>
            <div className={classes.flagImage}><img src={flag} alt="" /></div>
            <div><Link to={`${id}`}>
                <button className={classes.button}>See Recipe</button>
            </Link></div>


        </div>
        </div>
    
                    )}

            
        
 


/* <Link to={`${id}`}>see more</Link> */


export default RecipeCard;
