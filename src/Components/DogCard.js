import React from 'react';
import DogModal from './DogModal';

// sets up list of dogs as buttons using modal

const DogCard = ({ dog }) => {
	// if dog doesn't have a name don't show it
	if (dog.title.rendered) {
		return (
			<li className="dog-card" key={dog.id}>
				<DogModal dog={dog} />
			</li>
		);
	} else return null;
};

export default DogCard;
