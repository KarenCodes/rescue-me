import React from 'react';

const FormStep3 = props => {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					className="form-control"
					id="password"
					name="password"
					type="password"
					placeholder="Enter password"
					value={props.password}
					onChange={props.handleChange}
				/>
			</div>
			<button className="form-submit">Find me a dog!</button>
		</React.Fragment>
	);
};

export default FormStep3;
