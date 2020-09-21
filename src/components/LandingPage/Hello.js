import React from 'react';

import Categories from '../../resources/IntroCategories.png'

const Hello = () => {
	return (
		<div className="HelloC" id="Intro">
		
			<h2>Optimize your microbiome</h2>
			<img src={Categories} alt="Micro-Nutrient Categories" />
			<p>Keep track of what you eat,</p> 
			<p>get molecular analytics.</p>

		</div>
	)
}

export default Hello;