import React from 'react';

const Button = props => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
};

const FilterButton = props => {
  const { group, value, text, conditions, setConditions } = props;
  return (
    <Button
      className={
        isFilterSelected(conditions, group.name, value.name) ? 'selected' : null
      }
      onClick={() =>
        toggleFilter(conditions, setConditions, group.name, value.name)
      }
      text={text}
    />
  );
};
const isFilterSelected = (conditions, group, value) => {
  if (!conditions[group]) return false;
  if (conditions[group].includes(value)) {
    return true;
  }

  return false;
};

// Adds or removes a filter value to the list of conditions
const toggleFilter = (conditions, setConditions, group, value) => {
  if (!conditions) return;
  const newConditions = Object.assign(conditions);
  // If filter group is not in conditions, add new group with value
  if (!(group in newConditions)) newConditions[group] = new Array(value);
  else {
    // If filter group is in conditions, and value is in group, remove it.
    if (newConditions[group].find(valueC => valueC === value)) {
      newConditions[group] = newConditions[group].filter(
        conditionsValue => conditionsValue !== value
      );
      // If there are no more values in group, remove group
      if (newConditions[group].length === 0) delete newConditions[group];
    }
    // If group is in conditions, and value is not in group, add it.
    else {
      newConditions[group].push(value);
    }
  }
  setConditions(newConditions);
  return true;
};

export default FilterButton;
