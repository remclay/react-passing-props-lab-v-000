import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ handleFilterChange, filters, fruit, selectedFilter }) => {
  return(
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={filters} />
      <FilteredFruitList
        filter={selectedFilter} items={fruit} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: ''
};

export default FruitBasket;
