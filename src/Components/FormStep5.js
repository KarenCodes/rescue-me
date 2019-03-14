import React from 'react';

const FormStep5 = props => {
	if (props.currentStep !== 5) {
		return null;
	}

	return (
		<React.Fragment>
			<fieldset>
				<legend>Here's what you selected</legend>
				<p>Ok, {props.username}!</p>
				<p>Here's what you chose:</p>
				<ul>
					<li>{props.house}</li>
					<li>{props.kids}</li>
					<li>{props.cats}</li>
				</ul>
				<button className="form-submit">Find my match!</button>
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep5;
