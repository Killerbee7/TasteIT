import React, {useEffect} from 'react';

import axios from 'axios';

import RecipeCard from '../components/RecipeCard';



let allRecipes = [];



const Recipes = () => {

    useEffect(() => {

        axios.get("http://localhost:3001/recipes")

        .then((response) => {

            response.data.map((item) => {

                allRecipes.push(item);

                return(allRecipes)     

    })

    console.log('allRecipes', allRecipes);

});

}, []);

    return (

        <div>

            <label htmlFor='search-recipes'>Search for recipe:</label>

            <input type="text" name='search-recipes' id='search-recipes'/>

            <h1>Our Recipes</h1>

            <div className="recipes-list">{allRecipes.map((recipe) => (

                <RecipeCard

               key={recipe.id}

               id={recipe.id}

               name={recipe.name}

               author={recipe.author}

               country={recipe.country}

               desc={recipe.desc}

               image={recipe.img} 

              

               />

       

               ))}

               </div>

        </div>

    );

};



export default Recipes;