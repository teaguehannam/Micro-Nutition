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
				<a href="#">Privacy</a>
				<a href="#">Legal</a>
			</div>


			<div className="Brand">
				<h1>Micro Nutrition</h1>
			</div>

			<div className="Account">
				<a href="#">Login</a>
			</div>

			<nav>
				<a href="">Introduction</a>
				<a href="">Features</a>
				<a href="">Research</a>
				<a href="">Contact</a>
			</nav>


		</div>
	)
}

export default Grid;