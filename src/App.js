import React from 'react';
import Layout from './pages/Layout';
import {Routes,Route,BrowserRouter} from 'react-router-dom';

import PokeList from './components/PokeList';
import About from './components/About';
import Home from './components/Home';
import PokeSingle from './components/PokeSingle';





const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="recipe" element={<PokeList/>}/>
      <Route path='pokelist/:pokesingle' element={<PokeSingle/>}/>
      <Route path="about" element={<About/>}/>

      </Route>
    </Routes>
     
    </BrowserRouter>
  );
};

export default App;