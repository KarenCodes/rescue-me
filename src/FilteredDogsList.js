import React from 'react';
import { Link } from 'react-router-dom';
import DogCard from './Components/DogCard';

const withTransformProps = mapperFunc => BaseComponent => baseProps => {
	const transformedProps = mapperFunc(baseProps);
	return <BaseComponent {...transformedProps} />;
};

// Component that lists dogs with a link to Dog detail for each dog
const renderDogsList = ({ dogs }) => dogs.map(dog => <DogCard dog={dog} />);
// Returns true if conditions are in dog
let hasConditions = (dog, conditions) => {
	for (let group in conditions) {
		if (!conditions[group].includes(dog.meta[group])) {
			return false;
		}
	}
	return true;
};
// Component that renders a list of dogs after filtering it with conditions
const FilteredDogList = withTransformProps(({ dogs, conditions }) => {
	if (!conditions) {
		return dogs;
	}

	return {
		dogs: dogs.filter(dog => hasConditions(dog, conditions))
	};
})(renderDogsList);
//const FilteredDogList = withFilterProps (renderDogsList);
export default FilteredDogList;
