import React from "react";
import "./Recipecard.module.css";

import { Link } from "react-router-dom";

const RecipeCard = ({ id, name, author, country_code, image, desc }) => {
  return (
    <div id="container">	
	
	<div class="product-details">
		
	<h1>{name}</h1>
	
		
<div class="control">
	
	<button class="btn">
	 <span class="price">$250</span>
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span class="buy">Get now</span>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
	<img src={image} alt=""/>
	

<div class="info">
	<h2>{desc}</h2>
	
</div>
</div>



<Link to={`${id}`}>see more</Link>
</div>
)}

export default RecipeCard;
