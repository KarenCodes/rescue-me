import React from 'react';
import toggleFilter from '../Filter.js';
import FilteredDogsList from '../FilteredDogsList';

const FormDisplayDogs = props => {
	// build conditions based on form input
	// props.house can have a value of "house" or "apartment" or null
	// props.kids can have a value of "kids" or "no kids" or null

	const conditions = {},
		dogs = {};
	if (props.kids === 'kids') {
		// set good with kids condition
		conditions['rescue_me_meta_good_with_kids'] = 'true';
		// toggleFilter('', group, 'true');
	}
	if (props.house === 'apartment') {
		//set small condition
	} else {
		//set all sizes
	}

	return (
		<div>
			<FilteredDogsList dogs={dogs} conditions={conditions} />;
		</div>
	);
};
export default FormDisplayDogs;
