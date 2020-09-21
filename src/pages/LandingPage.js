import React from 'react';

// Components
import Hello from '../components/LandingPage/Hello.js';
import CurrentFeatures from '../components/LandingPage/CurrentFeatures.js';
import Research from '../components/LandingPage/Research.js';
import SkillLevel from '../components/LandingPage/SkillLevel.js';
import Contact from '../components/LandingPage/Contact.js';
import Register from '../components/LandingPage/Register.js';

const LandingPage = () => {
	return (
		<div className="LandingC">
			
			<Hello />
			<CurrentFeatures />
			<Research />
			<SkillLevel />
			<Register />
			<Contact />
			
		</div>
	)
}

export default LandingPage;