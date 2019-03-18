import React from 'react';

const FormStep2 = props => {
	if (props.currentStep !== 2) {
		return null;
	}

	return (
		<React.Fragment>
			<p>Hi {props.username}!</p>
			<p>I have a few questions to find the right dog for you.</p>
			<fieldset>
				<legend>Do you live in a House or Apartment?</legend>
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
							checked={props.house === 'house' ? true : false}
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
							checked={props.house === 'apartment' ? true : false}
							value="apartment"
							onChange={props.handleChange}
						/>
					</div>
				</div>
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep2;
