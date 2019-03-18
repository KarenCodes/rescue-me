import React from 'react';

import Dogs from '../../Dogs';

const FormDisplayDogs = props => {
	const { username, house, kids, cats, otherdogs, time, dogs } = props;
	const conditions = {};
	// build conditions based on form input
	// props.house can have a value of "house" or "apartment" or null
	// props.kids can have a value of "kids" or "no kids" or null

	if (kids === 'kids') {
		// set good with kids condition
		conditions.rescue_me_meta_good_with_kids = 'true';
	}
	if (cats === 'cats') {
		// set good with kids condition
		conditions.rescue_me_meta_good_with_cats = 'true';
	}

	if (otherdogs === 'other dogs') {
		//set good with dogs condition
		conditions.rescue_me_meta_good_with_dogs = 'true';
	}

	if (house === 'apartment') {
		//set small condition
		conditions.rescue_me_meta_size = 'Small';
	}

	if (time === 'no time to train') {
		//set to adult or senior
		conditions.rescue_me_meta_age = [];
		conditions.rescue_me_meta_age.push('Adult', 'Senior');
	}

	return (
		// return <FilteredDogsList conditions={this.state.conditions} />;

		<div>
			<Dogs username={username} dogs={dogs} conditions={conditions} />
		</div>
	);
};

export default FormDisplayDogs;
