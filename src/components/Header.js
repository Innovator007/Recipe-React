import React from 'react';

const Header = () => {
	return (
		<div className="recipe-header">
			<div className="container">
			<div className="row">
				<div className="col-md-6 d-flex flex-column justify-content-center">
					<h1>Recipe Search</h1>
					<p>A search engine to find recipes by their ingredients</p>
				</div>
				<div className="col-md-6 desktop-only">
					<div className="row">
						<div className="col-md-4">
							<img className="img-responsive" src="./images/img-1.png" alt="Image 1" />
						</div>
						<div className="col-md-4">
							<img className="img-responsive" src="./images/img-2.png" alt="Image 2" />
						</div>
						<div className="col-md-4">
							<img className="img-responsive" src="./images/img-3.png" alt="Image 3" />
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}

export default Header;