import React from 'react';

const FormStep3 = props => {
	if (props.currentStep !== 3) {
		return null;
	}
	const { kids, house, username } = props;
	const message = !house ? 'homeless' : house;

	return (
		<React.Fragment>
			<fieldset>
				<legend>Will your dog be with kids?</legend>
				<p>
					Nice, {message}. Are there any mini-versions of {username ? username : 'you'} running around?
				</p>
				<div className="form-group">
					<div className="form-item">
						<label htmlFor="kids">
							<span className="emoji" role="img" aria-label="Yes kids">
								👶
							</span>
							<span className="text">Kids</span>
						</label>
						<input
							className="form-control"
							id="kids"
							name="kids"
							type="radio"
							checked={kids === 'kids' ? true : false}
							value="kids"
							onChange={props.handleChange}
						/>
					</div>

					<div className="form-item">
						<label htmlFor="no-kids">
							<span className="emoji" role="img" aria-label="No kids">
								👎
							</span>
							<span className="text">No Kids</span>
						</label>
						<input
							className="form-control"
							id="no-kids"
							name="kids"
							type="radio"
							checked={kids === 'no kids' ? true : false}
							value="no kids"
							onChange={props.handleChange}
						/>
					</div>
				</div>
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep3;
