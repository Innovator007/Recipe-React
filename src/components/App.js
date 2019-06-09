import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Recipes from './Recipes';
import NoSearch from './NoSearch';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			recipes: [],
			hasSearched: false
		}
		this.updateRecipes = this.updateRecipes.bind(this);
	}
	updateRecipes(recipes, searchTerm) {
		this.setState({
			value: searchTerm.split(",").map(i => i.trim()),
			recipes,
			hasSearched: true
		});
	}
	render() {
		return (
			<div>
				<Header />
				<SearchBar callback={this.updateRecipes} />
				{ this.state.hasSearched ? 
				 <Recipes searchTerm={this.state.value} recipes={this.state.recipes} />
				: <NoSearch /> }
			</div>
		);
	}
}

export default App;

