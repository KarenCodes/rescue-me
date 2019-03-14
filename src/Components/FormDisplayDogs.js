import React from 'react';

import Dogs from '../Dogs';
import toggleFilter from '../Filter.js';

export default class FormDisplayDogs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			conditions: {}
		};
		this.buildConditions(this.props);
	}

	buildConditions = props => {
		// build conditions based on form input
		// props.house can have a value of "house" or "apartment" or null
		// props.kids can have a value of "kids" or "no kids" or null

		if (props.kids === 'kids') {
			// set good with kids condition
			let group = 'rescue_me_meta_good_with_kids';
			this.setState({ conditions: group['true'] });
			// this.state.conditions[group] = 'true';
			// toggle needs (conditions, setConditions, group, value)
			// toggleFilter(this.state.conditions, this.setConditions, group, 'true');
		}
		if (props.cats === 'cats') {
			// set good with kids condition
			let group = 'rescue_me_meta_good_with_cats';
			this.setState({ conditions: group['true'] });
			// this.state.conditions[group] = 'true';
		}
		let group = 'rescue_me_meta_size';
		if (props.house === 'apartment') {
			//set small condition
			this.setState({ conditions: group['Small'] });
			// this.state.conditions[group] = 'Small';
		}
	};

	render() {
		// return <FilteredDogsList conditions={this.state.conditions} />;
		return (
			<div>
				<Dogs
					username={this.props.username}
					dogs={this.props.dogs}
					conditions={this.state.conditions}
					setConditions={this.setConditions}
				/>
			</div>
		);
	}
}
