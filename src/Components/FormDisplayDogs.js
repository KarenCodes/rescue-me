import React from 'react';

import Dogs from '../Dogs';

const FormDisplayDogs = props => {
	const { username, house, kids, cats, dogs } = props;
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

	if (house === 'apartment') {
		//set small condition
		conditions.rescue_me_meta_size = 'Small';
	}
	console.log(conditions);

	return (
		// return <FilteredDogsList conditions={this.state.conditions} />;

		<div>
			<Dogs username={username} dogs={dogs} conditions={conditions} />
		</div>
	);
};

export default FormDisplayDogs;
