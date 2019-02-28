import React from 'react';
import { Link } from 'react-router-dom';

const withTransformProps = mapperFunc => BaseComponent => baseProps => {
  const transformedProps = mapperFunc(baseProps);
  return <BaseComponent {...transformedProps} />;
};

// Component that lists dogs with a link to Dog detail for each dog
const renderDogsList = ({ dogs }) =>
  dogs.map(dog => (
    <li key={dog.id}>
      <h2 dangerouslySetInnerHTML={{ __html: dog.title.rendered }} />
      <p dangerouslySetInnerHTML={{ __html: dog.content.rendered }} />
      <Link to={`/dog/${dog.slug}`}>Learn more about {dog.title.rendered}</Link>
      <hr />
    </li>
  ));
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
