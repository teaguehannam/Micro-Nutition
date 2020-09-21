import React from 'react';

// Components
import Accessibility from './Accessibility.js';
import Header from './Header.js';
import LandingPage from '../pages/LandingPage.js';
//import Footer from './Footer.js';

const Grid = () => {
	
	return (
		<div className="GridC">

			<Accessibility />
			<Header />
			<LandingPage />
		{/*
			<Footer />
		*/}
	
		</div>
	)
}

export default Grid;