import React from 'react';

import HealthyFood from '../../resources/HealthyFood.png';
import Rabbit from '../../resources/rabbit.gif';
import DnaStates from '../../resources/dnaStates.jpg';

const SkillLevel = () => {
	return (
		<div className="SkillLevelC" id="Level">

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
					<p>Simulate diets/meal plans.</p>
					<p>Customize goals and reports.</p>
					<p>Keep track of foods preferences.</p>
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
					<img src={DnaStates} alt="Dna strand states" />
				</div>


			</div>

		</div>
	)
}

export default SkillLevel;