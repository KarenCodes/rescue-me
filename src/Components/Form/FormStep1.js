import React from 'react';

const FormStep1 = props => {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<fieldset>
			<legend>Tell me about yourself</legend>
			<p>
				<span className="emoji" role="img" aria-label="Fairy">
					🧚‍♀️
				</span>
				Hi, I'm your fairy dogmother and I'm here to help you find a dog!
			</p>
			<p>I have a few questions to ask to you first. Let's start with an easy one.</p>
			<div className="form-group">
				<div className="form-item">
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
			</div>
		</fieldset>
	);
};

export default FormStep1;
