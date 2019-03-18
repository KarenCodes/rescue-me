import React from 'react';

const FormStep7 = props => {
	if (props.currentStep !== 7) {
		return null;
	}
	const { username, house, kids, cats, otherdogs, time, submitted } = props;

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
					<li>{otherdogs}</li>
					<li>{time}</li>
				</ul>
				{submitted ? null : <button className="form-submit">Find my match!</button>}
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep7;
