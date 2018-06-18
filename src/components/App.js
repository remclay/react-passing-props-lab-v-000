import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

// from Filter
  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

// from FilteredFruitList, get all items
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

// from FruitBasket
  handleFilterChange = (event) => {
     console.log('new filter: ', event.target.value);
     this.setState({ currentFilter: event.target.value });
   }

  render() {
    return (
      <FruitBasket handleFilterChange={this.handleFilterChange} selectedFilter={this.state.currentFilter} filters={this.state.filters} fruit={this.state.fruit} />
    )
  }
}

export default App;
