import React from 'react';

const FormStep4 = props => {
	if (props.currentStep !== 4) {
		return null;
	}
	return (
		<React.Fragment>
			<fieldset>
				<legend>Will your dog be with cats?</legend>

				<div className="form-group">
					<div className="form-item">
						<label htmlFor="cats">
							<span className="emoji" role="img" aria-label="Yes cats">
								😺
							</span>
							<span className="text">Cats</span>
						</label>
						<input
							className="form-control"
							id="cats"
							name="cats"
							type="radio"
							checked={props.cats === 'cats' ? true : false}
							value="cats"
							onChange={props.handleChange}
						/>
					</div>

					<div className="form-item">
						<label htmlFor="no-cats">
							<span className="emoji" role="img" aria-label="No Cats">
								😾
							</span>
							<span className="text">No cats</span>
						</label>
						<input
							className="form-control"
							id="no-cats"
							name="cats"
							type="radio"
							checked={props.cats === 'no cats' ? true : false}
							value="no cats"
							onChange={props.handleChange}
						/>
					</div>
				</div>
			</fieldset>
		</React.Fragment>
	);
};

export default FormStep4;
