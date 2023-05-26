import React from "react";
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Header from "./components/header/Header";
import './App.css';
import Footer from "./components/footer/Footer";
import RecipeCard from "./components/recipecards/cards/RecipeCard";
import Recipes from "./pages/RecipeApp/Recipes";
import RecipeDetail from "./pages/RecipeApp/RecipeDetail";
import RecipesByLetters from "./pages/RecipeApp/RecipesByLetters";



export default function App(){
  return(

    <>
    <Header/>
    <div style={{ padding: 10 }}>
      <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Recipes'} element={<Recipes/>} />
          <Route path={'/recipe/:idMeal'} element={<RecipeDetail/>} />
          <Route path={'/Recipes/by-letters'} element={<RecipesByLetters/>} />



        
      </Routes>
    </div>

    <Footer/>
  </>

  )
}