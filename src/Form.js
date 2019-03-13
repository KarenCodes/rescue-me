import React from 'react';
import FormStep1 from './Components/FormStep1';
import FormStep2 from './Components/FormStep2';
import FormStep3 from './Components/FormStep3';
import FormStep4 from './Components/FormStep4';
// import FormStep5 from './Components/FormStep5';
// import FormStep6 from './Components/FormStep6';
import FormDisplayDogs from './Components/FormDisplayDogs';

//https: css-tricks.com/the-magic-of-react-based-multi-step-forms/

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		const { dogs, conditions, setConditions } = this.props;

		this.state = {
			currentStep: 1,
			lastStep: 4,
			submitted: '',
			username: '',
			house: '',
			kids: '',
			cats: ''
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
		// const { username, house, kids } = this.state;
		// alert(`You entered: \n
		//       Name: ${username} \n
		//       House: ${house} \n
		//       Kids: ${kids}`
		//       );
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
		if (currentStep !== 1) {
			return (
				<button className="form-secondary" type="button" onClick={this._prev}>
					Previous
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

					{this.previousButton()}
					{this.nextButton()}
				</form>
				{/* when form is submitted, display list of dogs */}

				{this.state.submitted && (
					<FormDisplayDogs
						username={this.state.username}
						house={this.state.house}
						kids={this.state.kids}
						cats={this.state.cats}
						dogs={this.props.dogs}
						conditions={this.state.conditions}
						setConditions={this.setConditions}
					/>
				)}
			</main>
		);
	}
}
