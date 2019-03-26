import React from 'react';
import DogCard from '../Dog/DogCard';
import isEmpty from 'lodash/isEmpty';

const withTransformProps = mapperFunc => BaseComponent => baseProps => {
  const transformedProps = mapperFunc(baseProps);
  return <BaseComponent {...transformedProps} />;
};

// Component that lists dogs
const renderDogsList = ({ dogs, message }) => {
  if (message) console.log('message', message);
  return (
    <React.Fragment>
      {message && <li key="empty">No match</li>}
      {dogs.map(dog => (
        <DogCard dog={dog} key={dog.id} />
      ))}
    </React.Fragment>
  );
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
  let message = '';
  if (isEmpty(conditions)) return { dogs, message };
  const filteredDogs = dogs.filter(dog => hasConditions(dog, conditions));
  filteredDogs.length < 1 ? (message = 'No match') : (message = '');
  return {
    dogs: dogs.filter(dog => hasConditions(dog, conditions)),
    message: message
  };
})(renderDogsList);

export default FilteredDogList;
