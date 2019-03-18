import React from 'react';
import FormStep1 from './Components/Form/FormStep1';
import FormStep2 from './Components/Form/FormStep2';
import FormStep3 from './Components/Form/FormStep3';
import FormStep4 from './Components/Form/FormStep4';
import FormStep5 from './Components/Form/FormStep5';
import FormStep6 from './Components/Form/FormStep6';
import FormStep7 from './Components/Form/FormStep7';
//when adding FormSteps remember to update lastStep
import FormDisplayDogs from './Components/Form/FormDisplayDogs';

//https: css-tricks.com/the-magic-of-react-based-multi-step-forms/

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentStep: 1,
			lastStep: 7,
			submitted: '',
			username: '',
			house: '',
			kids: '',
			cats: '',
			otherdogs: '',
			time: ''
		};
	}

	//input name must match name given in state
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		// used by render to decide if can display dogs
		this.setState({ submitted: true });
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= this.state.lastStep - 1 ? this.state.lastStep : currentStep + 1;
		this.setState({
			currentStep: currentStep
		});
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep
		});
	};

	/*
	 * the functions for our button
	 */
	previousButton() {
		let currentStep = this.state.currentStep;
		if (currentStep !== 1 && !this.state.submitted) {
			return (
				<button className="form-secondary" type="button" onClick={this._prev}>
					Back
				</button>
			);
		}
		return null;
	}

	nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep < this.state.lastStep) {
			return (
				<button className="form-primary" type="button" onClick={this._next}>
					Next
				</button>
			);
		}
		return null;
	}

	render() {
		return (
			<main>
				<h1>Match me with new best friend</h1>
				<p>
					Step {this.state.currentStep} of {this.state.lastStep}
				</p>

				<form onSubmit={this.handleSubmit}>
					{/*
        render the form steps and pass required props in
      */}
					<FormStep1
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						username={this.state.username}
					/>
					<FormStep2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						house={this.state.house}
						username={this.state.username}
					/>
					<FormStep3
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						kids={this.state.kids}
					/>
					<FormStep4
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						cats={this.state.cats}
					/>
					<FormStep5
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						otherdogs={this.state.otherdogs}
					/>
					<FormStep6
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						time={this.state.time}
					/>
					<FormStep7
						username={this.state.username}
						house={this.state.house}
						kids={this.state.kids}
						cats={this.state.cats}
						otherdogs={this.state.otherdogs}
						time={this.state.time}
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						submitted={this.state.submitted}
					/>

					<div className="nextprev">
						{this.previousButton()}
						{this.nextButton()}
					</div>
				</form>
				{/* when form is submitted, display list of dogs */}

				{this.state.submitted && (
					<FormDisplayDogs
						username={this.state.username}
						house={this.state.house}
						kids={this.state.kids}
						cats={this.state.cats}
						otherdogs={this.state.otherdogs}
						time={this.state.time}
						dogs={this.props.dogs}
					/>
				)}
			</main>
		);
	}
}
