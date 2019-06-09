import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onInputChange(event) {
		this.setState({ value: event.target.value });
	}
	onSubmit() {
		var endpoint = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=";
		const ingredientsList = this.state.value.split(",").map(i => i.trim());
		for(var i=0;i<ingredientsList.length;i++) {
			if(ingredientsList[i].toLowerCase() === "onion") {
				ingredientsList[i] = "onions";
			}
			endpoint += ingredientsList[i].toLowerCase();
			if(!(i === ingredientsList.length - 1)) {
				endpoint += ",";
			} 
		}
		fetch(endpoint)
			.then(result => result.json())
			.then(result => this.props.callback(result.results,this.state.value))
	}
	render() {
		return (
			<div className="search-bar-area d-flex flex-column align-items-center justify-content-center">
				<div className="d-flex justify-content-center align-items-center mt-2">
					<input onChange={this.onInputChange} placeholder="Try: Onion, Garlic..." type="search" className="search-bar" />
					<div onClick={this.onSubmit} style={{backgroundColor: "#040c19",padding:10,borderRadius: 50,cursor:"pointer"}}>
						<img style={{height:30,width:30}} src="./images/search-icon.png" alt="Search icon" />
					</div>
				</div>
				<div className="text-center mt-3">	
					<p>
					Type in some ingredients (in comma seperated form i.e. Capsicum, Onion) you like 
					and we will suggest you 
					recipes based on it
					</p>
				</div>	
			</div>
		);
	}
}

export default SearchBar;