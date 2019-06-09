import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.renderContent=this.renderContent.bind(this);
	}

	renderContent() {
		if(this.props.recipes.length > 0) {
			return (
				<div style={{backgroundColor: "#eee"}}>
				<div className="container">
					<div className="row">
						{ this.props.recipes && this.props.recipes.map((el,i) => {
							return (
								<Recipe
									key={i}
									recipe={el}
									searchTerm={this.props.searchTerm}
								/>
							);
						}) } 
					</div>
				</div>
				</div>
			);
		} else {
			return (
				<div className="no-search text-center">
					<h2>Sorry, no results found, please relax the search criteria!</h2>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{ this.renderContent() }
			</div>
		);
	}
}

export default Recipes;