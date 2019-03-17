import React, { Component } from 'react';
import { WP_URLS, shuffle } from './Helpers.js';
import Dogs from './Dogs';
import Form from './Form';
import About from './About';

import { Switch, Route } from 'react-router-dom';

class Main extends Component {
	state = {
		dogs: [],
		conditions: {}
	};

	setConditions = newConditions => {
		this.setState({ conditions: newConditions });
	};

	componentDidMount() {
		// Get dog data from WordPress sites using the API for the custom post type rescue-me-dog
		for (let i in WP_URLS) {
			fetch(WP_URLS[i])
				.then(response => {
					if (response.ok) return response.json();
					// If the custom post type is not insalled on the WordPress site, there will be a 404
					else throw Error(`Request rejected with status ${response.status}`);
				})
				.then(dogs => {
					// Add site number to dog id to have a unique id
					dogs.map(dog => (dog.id = dog.id + i));
					// Combine new dogs with dogs in state and shuffle them
					const moreDogs = shuffle([...this.state.dogs, ...dogs]);
					this.setState({ dogs: moreDogs });
				})
				.catch(error => console.error(error));
		}
	}
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<Dogs
								dogs={this.state.dogs}
								conditions={this.state.conditions}
								setConditions={this.setConditions}
							/>
						);
					}}
				/>
				<Route
					path="/dog"
					render={() => {
						return (
							<Dogs
								dogs={this.state.dogs}
								conditions={this.state.conditions}
								setConditions={this.setConditions}
							/>
						);
					}}
				/>
				<Route
					path="/form"
					render={() => {
						return <Form dogs={this.state.dogs} />;
					}}
				/>
				<Route path="/about" component={About} />
			</Switch>
		);
	}
}

export default Main;
