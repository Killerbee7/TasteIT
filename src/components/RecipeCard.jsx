import React from 'react';


import { Link, useNavigate } from 'react-router-dom';


const RecipeCard = ({id,name, author, country, image, desc}) => {

    let navigate= useNavigate();


    return (

        <div className='recipe-card'>

             <h2>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</h2>

             <p>{author}</p>

             <p>{country}</p>

             <p>{desc}</p>

            <img src={image} alt={name}/>

            <button><Link to={`${id}`}>See more</Link></button>

        </div>

    );

};


export default RecipeCard;