import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ strCategory }) {
  return (
    <button
      type="button"
      data-testid={ `${strCategory}-category-filter` }
      className="category-button"
    >
      {strCategory}
    </button>
  );
}

CategoryButton.propTypes = {
  strCategory: PropTypes.string.isRequired,
};

export default CategoryButton;
