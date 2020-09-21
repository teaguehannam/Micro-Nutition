import React from 'react';

import Doctor from '../../resources/icons/doctor.svg';
import Foods from '../../resources/icons/foods.svg';
import Graph from '../../resources/icons/graph.svg';
import Knowledge from '../../resources/icons/knowledge.svg';
import Notes from '../../resources/icons/notes.svg';
import Optimize from '../../resources/icons/optimize.svg';

const CurrentFeatures = () => {
	return (
		<div className="FeaturesC" id="Features">
	
			<div className="Card">
				<img src={Notes} alt="Notes" />
				<p>Track your food,</p>
				<p>recieve recommendations</p>
			</div>

			<div className="Card">
				<img src={Graph} alt="Graph" />
				<p>Daily/Weekly/Monthly</p>
				<p>analytical tools</p>
			</div>

			<div className="Card">
				<img src={Knowledge} alt="Knowledge" />
				<p>Expand knowledge</p>
				<p>of nutitional health</p>
			</div>

			<div className="Card">
				<img src={Foods} alt="Foods" />
				<p>Simply add foods,</p>
				<p>no need for restrictions</p>
			</div>

			<div className="Card">
				<img src={Optimize} alt="Optimize" />
				<p>Simulate and optimize</p>
				<p>meal plans or diets</p>
			</div>

			<div className="Card">
				<img src={Doctor} alt="Doctor" />
				<p>Backed by latest</p>
				<p>scientific research</p>
			</div>

		</div>
	)
}

export default CurrentFeatures;