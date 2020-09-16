import React from 'react';

// Components
import Hello from '../components/LandingPage/Hello.js';
import FeaturesTitle from '../components/LandingPage/FeaturesTitle.js';
import CurrentFeatures from '../components/LandingPage/CurrentFeatures.js';
import FutureFeatures from '../components/LandingPage/FutureFeatures.js';
import Research from '../components/LandingPage/Research.js';

const LandingPage = () => {
	return (
		<div className="LandingC">
		
			<Hello />

			<FeaturesTitle />
			<div className="Row">
				<CurrentFeatures />
				<FutureFeatures />
			</div>

			<Research />
			
		</div>
	)
}

export default LandingPage;