import React from 'react';

const FormStep1 = props => {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<React.Fragment>
			<p>I'm excited to help you find a dog!</p>

			<div className="form-group">
				<label htmlFor="username">What is your name? </label>
				<input
					className="form-control"
					id="username"
					name="username"
					type="text"
					placeholder="Enter your name"
					value={props.username}
					onChange={props.handleChange}
				/>
			</div>
		</React.Fragment>
	);
};

export default FormStep1;
