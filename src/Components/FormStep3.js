import React from 'react';

const FormStep3 = props => {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<React.Fragment>
			<fieldset>
				<legend>Will your dog be with kids?</legend>

				<div className="form-group">
					<div className="form-item">
						<label htmlFor="kids">
							<span class="emoji">👍</span>
							<span class="text">Kids</span>
						</label>
						<input
							className="form-control"
							id="kids"
							name="kids"
							type="radio"
							checked={props.kids === 'kids' ? true : false}
							value="kids"
							onChange={props.handleChange}
						/>
					</div>

					<div className="form-item">
						<label htmlFor="no-kids">
							<span class="emoji">👎</span>
							<span class="text">No Kids</span>
						</label>
						<input
							className="form-control"
							id="no-kids"
							name="kids"
							type="radio"
							checked={props.kids === 'no kids' ? true : false}
							value="no kids"
							onChange={props.handleChange}
						/>
					</div>
				</div>
			</fieldset>

			<button className="form-submit">Find my match!</button>
		</React.Fragment>
	);
};

export default FormStep3;
