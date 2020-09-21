import React from 'react';

import NCBI from '../../resources/icons/ncibLogo.png';
import PubChem from '../../resources/icons/pubchemLogo.svg';

const Research = () => {
	return (
		
		<div className="ResearchC" id="Research">

			<div className="Title">
				<h3>Research</h3>
				<p>Based on information and studies from</p>
			</div>
			
			<div className="Links">
				<div className="Box">
					<a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">
						<img src={NCBI} alt="NCBI" />
					</a>
				</div>
				<div className="Box">
					<a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">
						<img src={PubChem} alt="Pubchem" />					
					</a>
				</div>
			</div>

		</div>
				
	)
}

export default Research;