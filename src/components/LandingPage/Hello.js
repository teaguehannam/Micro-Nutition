import React from 'react';

import Categories from '../../resources/IntroCategories.png'

const Hello = () => {
	return (
		<div className="HelloC">
		
			<h2>Micro-Nutrient analytics</h2>
			<img src={Categories} alt="Micro-Nutrient Categories" />
			<p>Optimize your microbiome</p>

		</div>
	)
}

export default Hello;