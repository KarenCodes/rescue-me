import React from 'react';

const FormDisplayDogs = props => {
	// build conditions
	console.log(props);
	if (props.kids === 'kids') {
		// set good with kids condition
	}
	if (props.house === 'house') {
		//set small condition
	}
	return <p>list matching dogs</p>;
};

export default FormDisplayDogs;
