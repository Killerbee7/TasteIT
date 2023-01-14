import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from './RecipeForm.module.css'

const RecipeForm = () => {
  const [data, setData] = useState({
    id:"",
    name: "",
    author: "",
    desc: "",
    country: "",
    flag:"",
    img: "",
    inc: [],
    inst: "",
  });

 
  const [ingredients, setIngredients] = useState([
    { id: 1, incName: "", quantity: "" },
  ]);

  // countries state is for saving data from rest countries API
  const [countries, setCountries] = useState([]);

  // Getting data of 250 countries
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);


  // basic onChange event for regular inputs
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const incList = [...ingredients];
    incList[i][name] = value;
    setIngredients(incList);
    setData({ ...data, inc: ingredients });
  };


  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country: correctCountry.name, flag: correctCountry.flag });
    
  };

  
  const addMore = (e) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1, incName: "", quantity: "" };
    setIngredients([...ingredients, newInc]);
  };

 
  const submitData = (e) => {
    axios.post("http://localhost:3001/recipes", data);
  };

  return (
    
    <div><h1 className={classes.heading}>ADD RECIPE</h1>
    <form onSubmit={submitData}>
      <div>
        <label htmlFor="name">Name</label>
        <input  type="text" name="name" id="name" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="img">Image url</label>
        <input type="url" name="img" id="img" onChange={changeData} />
        </div>
      
    
      
      <div>
        <label htmlFor="country">Recipe is from:</label>
        <select name="country" id="country" onChange={changeCountry}>
         <option value="selected">Choose a Country</option>
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      
     
      <fieldset>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                onChange={(e) => changeIncData(e, i)}
              />
            </div>
            <div>
              <label htmlFor="incName">Ingredient</label>
              <input
                type="text"
                name="incName"
                id="incName"
                onChange={(e) => changeIncData(e, i)}
              />
            </div>
          </div>
        );
      })}
      <button onClick={addMore}>+ Add more ingredients</button>
      </fieldset>
      <div className={classes.grid}>
        <label htmlFor="desc">Description</label>
        <textarea type="text" name="desc" id="desc" onChange={changeData} />
      </div>
      <div className={classes.grid1}>
        <label  htmlFor="inst">Instructions</label>
        <textarea type="text" name="inst" id="inst" onChange={changeData}  />
      </div>
      <div></div>
      
      <div>
      <button type="submit" value="Add recipe">Submit</button>
      <button type="reset" value="Clear Form">Clear Form</button>
      </div>
    </form>
    </div>
  );
};

export default RecipeForm;
