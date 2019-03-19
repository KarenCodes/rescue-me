import React from 'react';

const FormStep7 = props => {
	if (props.currentStep !== 7) {
		return null;
	}
	const { username, house, kids, cats, otherdogs, time, submitted } = props;
	const answers =
		!house && !kids && !cats && !otherdogs && !time ? (
			<li>Pfft, you didn't answer anything!</li>
		) : (
			<React.Fragment>
				<li>{house}</li>
				<li>{kids}</li>
				<li>{cats}</li>
				<li>{otherdogs}</li>
				<li>{time}</li>
			</React.Fragment>
		);

	return (
		<fieldset>
			<legend>The final step</legend>
			<p>Ok {username}! You ready?</p>
			<p>
				<strong>Here's what you chose:</strong>
			</p>
			<ul className="answers">{answers}</ul>
			{submitted ? null : <button className="form-submit final">Find my match!</button>}
		</fieldset>
	);
};

export default FormStep7;
