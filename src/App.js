import React from 'react';
import Layout from './pages/Layout';
import {Routes,Route,BrowserRouter} from 'react-router-dom';

import Recipes from './components/Recipes';
import About from './components/About';
import Home from './components/Home';
import SingleRecipe from './components/SingleRecipe';
import SeeMore from './components/SeeMore';





const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="recipe" element={<Recipes/>}/>
      <Route path='addrecipe' element={<SingleRecipe/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="recipe/:singlerecipe" element={<SeeMore/>}/>


      </Route>
    </Routes>
     
    </BrowserRouter>
  );
};

export default App;