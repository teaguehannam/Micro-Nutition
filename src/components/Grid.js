import React from 'react';

// Components
import Header from './Heada.js';
import LandingPage from '../pages/LandingPage.js';
//import Footer from './Foota.js';

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