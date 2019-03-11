import React from 'react';
import toggleFilter from '../Filter.js';
import FilteredDogsList from '../FilteredDogsList';

export default class FormDisplayDogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// dogs: [],
			conditions: {}
		};
	}

	buildConditions = props => {
		// build conditions based on form input
		// props.house can have a value of "house" or "apartment" or null
		// props.kids can have a value of "kids" or "no kids" or null
		console.log(props);
		if (props.kids === 'kids') {
			// set good with kids condition
			const group = 'rescue_me_meta_good_with_kids';
			// toggleFilter('', group, 'true');
		}
		if (props.house === 'apartment') {
			//set small condition
		} else {
			//set all sizes
		}
	};

	render() {
		this.buildConditions(this.props);
		// return <FilteredDogsList conditions={this.state.conditions} />;
		return (
			<div>
				<p>
					list of filtered dogs, how to do this, created Components/FormDisplayDogs to set up conditions, but
					I am lost: state, toggleFilter...
				</p>
				<p>also need to remove form from page?</p>
			</div>
		);
	}
}
