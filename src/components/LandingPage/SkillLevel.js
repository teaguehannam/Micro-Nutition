import React from 'react';

const SkillLevel = () => {
	return (
		<div className="SkillLevelC">
		
			<div className="SkillTitle">
				<h2>As involved as you want to be!</h2>
			</div>

			<div className="Scale">
				<div className="Easy">
					<h3>Basics</h3>
					<p>Keep track of the foods you eat.</p>
					<p>System will monitor micro-nutrients,</p>
					<p>and provide nutrient leveling foods.</p>
				</div>

				<div className="Intermediate">
					<h3>Intermediate</h3>
					<p>Simulate nutrient intake from meal or diet plans.</p>
					<p>Customize nutitional goals and periodic reports.</p>
				</div>

				<div className="Advanced">
					<h3>Advanced Features</h3>
					<p>Consolidated case studies, dedicated to:</p>
					<p>Anti-Aging, Disease Prevention</p>
					<p>Nootropics, Medicine</p>
				</div>


			</div>

		</div>
	)
}

export default SkillLevel;