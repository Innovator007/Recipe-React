import React from 'react';

const Recipe = ({ key, recipe, searchTerm }) => {
	return (
		<div className="col-md-4" key={key}>
			<div className="recipe-card">
				<h5>{ recipe.title }</h5>
				<img className="recipe-thumbnail" src={recipe.thumbnail} />
			</div>
			<div className="ingredients-card">
				<h6>INGREDIENTS : </h6>
				<div className="chips-div">
				{ recipe.ingredients.split(",")
				.map((i) => i.trim())
				.map((ingredient,i) => {
					return (
						<span className="chip">
							{ ingredient }
						</span>
					);
				}) }
				</div>
			</div>
			<div className="view-recipe d-flex justify-content-center">
				<a href={recipe.href}>
					View Recipe <img style={{height: 30, width: 30,marginLeft: 10,marginBottom: 3}} src="./images/arrow.png" />
				</a>
			</div>
		</div>
	);
}

export default Recipe;