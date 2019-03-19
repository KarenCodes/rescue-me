import React from 'react';

const FormStep2 = props => {
	if (props.currentStep !== 2) {
		return null;
	}
	const { house, username } = props;
	const message = !username
		? "Guess your name wasn't such an easy question after all."
		: `Nice to meet you ${username}!`;

	return (
		<fieldset>
			<legend>Do you live in a House or Apartment?</legend>
			<p>{message} Tell me about where you live.</p>
			<div className="form-group">
				<div className="form-item">
					<label htmlFor="house">
						<span className="emoji" role="img" aria-label="House">
							🏠
						</span>
						<span className="text">House</span>
					</label>
					<input
						className="form-control"
						id="house"
						name="house"
						type="radio"
						checked={house === 'house' ? true : false}
						value="house"
						onChange={props.handleChange}
					/>
				</div>

				<div className="form-item">
					<label htmlFor="apartment">
						<span className="emoji" role="img" aria-label="Apartment">
							🏢
						</span>
						<span className="text">Apartment</span>
					</label>
					<input
						className="form-control"
						id="apartment"
						name="house"
						type="radio"
						checked={house === 'apartment' ? true : false}
						value="apartment"
						onChange={props.handleChange}
					/>
				</div>
			</div>
		</fieldset>
	);
};

export default FormStep2;
