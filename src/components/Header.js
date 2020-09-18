import React from 'react';


const Grid = () => {
	
	return (
		<div className="HeaderC">

			<div className="Language">
				<span>EN</span>
				<div className="Dropdown">
					<p>español</p>
					<p>中文</p>
					<p>日本語</p>
					<p>한국어</p>
					<p>русский</p>
					<p>Türkçe</p>
				</div>
			</div>

			<div className="Legal">
				<a href="#">Light Mode</a>
				<a href="#">Legal</a>
			</div>


			<div className="Brand">
				<a href="https://micronutrients.netlify.app/">
					<h1>Micro Nutrition</h1>
				</a>			
			</div>

			<div className="Account">
				<a href="#">Login</a>
			</div>

			<nav>
				<a href="#Intro">Introduction</a>
				<a href="#Research">Research</a>
				<a href="#Features">Features</a>
				<a href="#Register">Register</a>
				<a href="#Contact">Contact</a>
			</nav>

		</div>
	)
}

export default Grid;