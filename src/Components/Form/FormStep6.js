import React from 'react';

const FormStep6 = props => {
	if (props.currentStep !== 6) {
		return null;
	}
	return (
		<React.Fragment>
			<fieldset>
				<legend>Do you have time to train your dog?</legend>

				<div className="form-group">
					<div className="form-item">
						<label htmlFor="time">
							<span className="emoji" role="img" aria-label="Time to Train">
								⏳
							</span>
							<span className="text">Time to Train</span>
						</label>
						<input
							className="form-control"
							id="time"
							name="time"
							type="radio"
							checked={props.time === 'time to train' ? true : false}
							value="time to train"
							onChange={props.handleChange}
						/>
					</div>

					<div className="form-item">
						<label htmlFor="no-time">
							<span className="emoji" role="img" aria-label="No Time to Train">
								⌛
							</span>
							<span className="text">No Time to Train</span>
						</label>
						<input
							className="form-control"
							id="no-time"
							name="time"
							type="radio"
							checked={props.time === 'no time to train' ? true : false}
							value="no time to train"
							onChange={props.handleChange}
						/>
					</div>
				</div>
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep6;
