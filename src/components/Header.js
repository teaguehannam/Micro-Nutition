import React from 'react';


const Header = () => {

	// Get the header
	var header = document.getElementById("HeaderC");

	console.log(header);


	return (
		<div className="HeaderC">

			<div className="Content">

				<div className="Brand">
					<a href="https://micronutrients.netlify.app/">Micro Nutrition</a>			
				</div>

				<nav>
					<a href="#Intro">Introduction</a>
					<a href="#Overview">Overview</a>
					<a href="#Research">Research</a>
					<a href="#Level">Features</a>
					<a href="#Email">Updates</a>
				</nav>

			</div>

		</div>
	)
}

export default Header;