import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';
import CategoryButton from '../components/CategoryButton';

function Drinks(props) {
  const { drinks, drinksCategories } = useContext(RecipesContext);
  const numberOfCategoriesToShow = 5;
  return (
    <div className="drinks-page">
      <div className="categories-buttons-container">
        {drinksCategories.slice(0, numberOfCategoriesToShow).map(({ strCategory }) => (
          <CategoryButton key={ strCategory } strCategory={ strCategory } />
        ))}
      </div>
      <Header
        headerType={ { title: 'Drinks', profileIcon: true, searchIcon: true } }
        { ...props }
      />
      <Recipes recipes={ drinks } />
      <Footer />
    </div>
  );
}

export default Drinks;