import React from 'react';

const FormStep5 = props => {
	if (props.currentStep !== 5) {
		return null;
	}
	const { username, house, kids, cats, submitted } = props;

	return (
		<React.Fragment>
			<fieldset>
				<legend>The final step</legend>
				<p>Ok {username}!</p>
				<p>Here's what you chose:</p>
				<ul>
					<li>{house}</li>
					<li>{kids}</li>
					<li>{cats}</li>
				</ul>
				{submitted ? null : <button className="form-submit">Find my match!</button>}
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep5;
