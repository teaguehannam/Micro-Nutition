import React from 'react';

// Components
import Hello from '../components/LandingPage/Hello.js';
import FeaturesTitle from '../components/LandingPage/FeaturesTitle.js';
import CurrentFeatures from '../components/LandingPage/CurrentFeatures.js';
import Research from '../components/LandingPage/Research.js';
import SkillLevel from '../components/LandingPage/SkillLevel.js';
import Contact from '../components/LandingPage/Contact.js';


const LandingPage = () => {
	return (
		<div className="LandingC">
		
		{/*
		*/}
			<Hello />
			<Research />
			<FeaturesTitle />
			<CurrentFeatures />
			<SkillLevel />
			<Contact />
			
		</div>
	)
}

export default LandingPage;