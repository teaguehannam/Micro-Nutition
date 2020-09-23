import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Accessibility = () => {
	
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleDarkMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	return (
		<div className="AccessibilityC">

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

			<div className="DarkMode__toggle">
				<div
					onClick={toggleDarkMode}
					className={darkMode ? 'toggle toggled' : 'toggle'}
				/>
			</div>

		</div>
	)
}

export default Accessibility;