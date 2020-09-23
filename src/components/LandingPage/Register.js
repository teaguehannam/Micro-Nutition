import React from 'react';

import EmailAnimation from '../../resources/EmailAnimation.gif';

const Register = () => {

	return (
		<div className="RegisterC" id="Email">

			<div className="Title">
				<h2>Subscribe for updates</h2>
			</div>

			<div className="Box">
				<img src={EmailAnimation} alt="Spinning dodecahedron" />
			</div>

			<div className="Box">
				<input 	type="text" 
						id="email" 
						placeholder="Enter email"
						autoComplete="off"
				/>
				<button type="submit">Submit</button>
			</div>

		</div>
	)
}

export default Register;