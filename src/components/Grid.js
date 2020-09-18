import React from 'react';

// Components
import Header from './Header.js';
import LandingPage from '../pages/LandingPage.js';
//import Footer from './Footer.js';

const Grid = () => {
	
	return (
		<div className="GridContainer Border">

			<Header />
			<LandingPage />
		{/*
			<Footer />
		*/}
	
		</div>
	)
}

export default Grid;