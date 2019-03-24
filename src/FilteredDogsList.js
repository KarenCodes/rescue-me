import React from 'react';
import DogCard from './Components/Dog/DogCard';

const withTransformProps = mapperFunc => BaseComponent => baseProps => {
  const transformedProps = mapperFunc(baseProps);
  return <BaseComponent {...transformedProps} />;
};

// Component that lists dogs
const renderDogsList = ({ dogs }) => {
  if (dogs.length < 1)
    return <li key="empty">No dogs yet, come back in a few days!</li>;
  return dogs.map(dog => <DogCard dog={dog} key={dog.id} />);
};

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

export default FilteredDogList;
