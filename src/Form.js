import React from 'react';
import FormStep1 from './Components/FormStep1';
import FormStep2 from './Components/FormStep2';
import FormStep3 from './Components/FormStep3';

//https: css-tricks.com/the-magic-of-react-based-multi-step-forms/

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			username: '',
			house: '',
			kids: ''
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
		const { username, house, kids } = this.state;
		alert(`You entered: \n
          Name: ${username} \n
          House: ${house} \n
          Kids: ${kids}`);
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
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
		if (currentStep < 3) {
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
				<p>Step {this.state.currentStep} of 3</p>

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

					{this.previousButton()}
					{this.nextButton()}
				</form>
			</main>
		);
	}
}
