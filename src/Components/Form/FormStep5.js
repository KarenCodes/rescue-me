import React from 'react';

const FormStep5 = props => {
	if (props.currentStep !== 5) {
		return null;
	}
	const { otherdogs, cats } = props;
	const message = cats === 'cats' ? `Ah, you have ${cats}. Won't ask how many.` : 'No cats to worry about.';

	return (
		<fieldset>
			<legend>Will your dog be with other dogs?</legend>
			<p>{message}</p>
			<div className="form-group">
				<div className="form-item">
					<label htmlFor="otherdogs">
						<span className="emoji" role="img" aria-label="Yes Other Dogs">
							🐶
						</span>
						<span className="text">Other Dogs</span>
					</label>
					<input
						className="form-control"
						id="otherdogs"
						name="otherdogs"
						type="radio"
						checked={otherdogs === 'other dogs' ? true : false}
						value="other dogs"
						onChange={props.handleChange}
					/>
				</div>

				<div className="form-item">
					<label htmlFor="no-otherdogs">
						<span className="emoji" role="img" aria-label="No Other Dogs">
							👎
						</span>
						<span className="text">No Other Dogs</span>
					</label>
					<input
						className="form-control"
						id="no-otherdogs"
						name="otherdogs"
						type="radio"
						checked={otherdogs === 'no other dogs' ? true : false}
						value="no other dogs"
						onChange={props.handleChange}
					/>
				</div>
			</div>
		</fieldset>
	);
};

export default FormStep5;
