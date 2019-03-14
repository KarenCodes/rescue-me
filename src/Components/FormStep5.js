import React from 'react';

const FormStep5 = props => {
	if (props.currentStep !== 5) {
		return null;
	}
	return (
		<React.Fragment>
			<fieldset>
				<legend>Here's what you selected</legend>
				<p>list out what they chose </p>
				<button className="form-submit">Find my match!</button>
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep5;
