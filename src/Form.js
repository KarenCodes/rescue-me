import React from 'react';

//https: css-tricks.com/the-magic-of-react-based-multi-step-forms/

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			email: '',
			username: '',
			password: ''
		};
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { email, username, password } = this.state;
		alert(`You entered: \n
           Email: ${email} \n
           Username: ${username} \n
           Password: ${password}`);
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
				<p>Step {this.state.currentStep} </p>

				<form onSubmit={this.handleSubmit}>
					{/*
        render the form steps and pass required props in
      */}
					<Step1
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						email={this.state.email}
					/>
					<Step2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						username={this.state.username}
					/>
					<Step3
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						password={this.state.password}
					/>
					{this.previousButton()}
					{this.nextButton()}
				</form>
			</main>
		);
	}
}

function Step1(props) {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<div className="form-group">
			<label htmlFor="email">Email address</label>
			<input
				className="form-control"
				id="email"
				name="email"
				type="text"
				placeholder="Enter email"
				value={props.email}
				onChange={props.handleChange}
			/>
		</div>
	);
}

function Step2(props) {
	if (props.currentStep !== 2) {
		return null;
	}
	return (
		<div className="form-group">
			<label htmlFor="username">Username</label>
			<input
				className="form-control"
				id="username"
				name="username"
				type="text"
				placeholder="Enter username"
				value={props.username}
				onChange={props.handleChange}
			/>
		</div>
	);
}

function Step3(props) {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					className="form-control"
					id="password"
					name="password"
					type="password"
					placeholder="Enter password"
					value={props.password}
					onChange={props.handleChange}
				/>
			</div>
			<button className="form-submit">Find me a dog!</button>
		</React.Fragment>
	);
}
