import React from 'react';





const RecipeCard = ({name, author, country, image, desc}) => {




    return (

        <div className='recipe-card'>

             <h2>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</h2>

             <p>{author}</p>

             <p>{country}</p>

             <p>{desc}</p>

            <img src={image} alt={name}/>

            <button onClick={}>See More</button>  

        </div>

    );

};


export default RecipeCard;