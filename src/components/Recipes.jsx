import React, {useEffect, useState} from 'react';

import axios from 'axios';

import RecipeCard from '../components/RecipeCard';

import classes from "./Recipes.module.css"






const Recipes = () => {

    const [recipes, setRecipes ] = useState([]);
    const [findRecipe, setFindRecipe ] = useState({search: ''});

    



    useEffect(() => {

        axios.get("http://localhost:3001/recipes")

        .then((res) => {

            setRecipes(res.data)   

        })

},[]);
const findHandler = (e) => {

    e.preventDefault();

    let search = e.target.value;

    setFindRecipe({ ...findRecipe,  search})

};



const searchedRecipes = recipes.filter((recipe) => {

    return recipe.name.toLowerCase().includes(findRecipe.search.toLowerCase());

});

    return (

        <div className={classes.recipecontainer}>

<label htmlFor='search-recipes'>Search for recipe:</label>

<input type="text" name='search-recipes' id='search-recipes' onChange={findHandler}/>

            <h1>Our Recipes</h1>
            

            <div className={classes.recipes}>{searchedRecipes.map((recipe) => (

                <RecipeCard

               key={recipe.id}

               id={recipe.id}

               name={recipe.name}

               author={recipe.author}

               country={recipe.country}

               desc={recipe.desc}

               image={recipe.img} 

               flag={recipe.flag}

              

               />

       

               ))}

               </div>

        </div>

    );

};



export default Recipes;