import React from 'react';

import EmailAnimation from '../../resources/EmailAnimation.gif';


const Register = () => {

return (
		<div className="RegisterC" id="register">

			<div className="Title">
				<h2>Get notified when product launches</h2>
			</div>

			<div className="Box">
				<img src={EmailAnimation} alt="Spinning dodecahedron" />
			</div>

			<div className="Box">
				<input 	type="text" 
						id="email" 
						placeholder="Enter email"
						autocomplete="off"
				/>
				<button type="submit">Submit</button>
			</div>

		</div>
	)
}

export default Register;