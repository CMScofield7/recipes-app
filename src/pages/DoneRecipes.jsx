import React, { useEffect, useState } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/doneRecipes.css';

function DoneRecipes(props) {
  const [receivedRecipes, setReceivedRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getDoneRecipes = () => {
    const recipeList = JSON.parse(localStorage.getItem('doneRecipes'));

    setReceivedRecipes(recipeList);
    setRecipes(recipeList);
  };

  useEffect(getDoneRecipes, []);

  const filterByType = ({ target: { name } }) => {
    let filteredRecipes = receivedRecipes;
    filteredRecipes = receivedRecipes.filter((recipe) => recipe.type === name);

    setRecipes(name === 'all' ? receivedRecipes : filteredRecipes);
  };

  return (
    <div style={ { display: 'flex', flexDirection: 'column', alignContent: 'center' } }>
      <Header
        headerType={ { title: 'Done Recipes', profileIcon: true, searchIcon: false } }
        { ...props }
      />
      <div className="filters-container">
        <button
          name="meal"
          onClick={ filterByType }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          name="drink"
          onClick={ filterByType }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
        <button
          name="all"
          onClick={ filterByType }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
      </div>
      <div className="container-done-recipes" style={ { marginBottom: '10vh' } }>
        { recipes
          ? recipes.map((recipe, index) => (
            <DoneRecipeCard
              key={ recipe.id }
              recipe={ recipe }
              className="done-recipe-card"
              index={ index }
              { ...props }
            />
          ))
          : null }
      </div>
      <Footer { ...props } />
    </div>
  );
}

export default DoneRecipes;
