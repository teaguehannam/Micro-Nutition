import React from 'react';

import HealthyFood from '../../resources/HealthyFood.png';
import Rabbit from '../../resources/rabbit.gif';
import DnaTypes from '../../resources/dnaTypes.jpg';

const SkillLevel = () => {
	return (
		<div className="SkillLevelC">
		
			<div className="SkillTitle">
				<h2>As involved as you want to be!</h2>
			</div>

			<div className="Scale">
				<div id="Overview" className="Easy">
					<h3>Basics</h3>
					<p>Keep track of the foods you eat.</p>
					<p>System will monitor micro-nutrients,</p>
					<p>and provide nutrient leveling foods.</p>
				</div>

				<div className="EasyImg">
					<img src={HealthyFood} alt="Bouque of healthy food" />
				</div>

				<div id="Overview" className="Intermediate">
					<h3>Intermediate</h3>
					<p>Simulate nutrient intake from meal plans.</p>
					<p>Keep track of liked and unliked foods.</p>
					<p>Customize goals and periodic reports.</p>
				</div>

				<div className="IntermediateImg">
					<img src={Rabbit} alt="Cute Rabbit" />
				</div>

				<div id="Overview" className="Advanced">
					<h3>Advanced</h3>
					<p>Consolidated case studies, dedicated to:</p>
					<div className="Categories">
						<p>Anti-Aging</p>
						<p>Disease</p>
						<p>Medicine</p>
						<p>Performance</p>
					</div>
				</div>

				<div className="AdvancedImg">
					<img src={DnaTypes} alt="Dna strand states" />
				</div>


			</div>

		</div>
	)
}

export default SkillLevel;