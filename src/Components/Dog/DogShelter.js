import React from 'react';

//used in Content component to add Shelter to Contact info
const DogShelter = props => {
	const { dog } = props;

	return (
		<p className="dog-shelter">
			<a href={dog.shelterURL}>{dog.shelterName}</a>
		</p>
	);
};

export default DogShelter;
