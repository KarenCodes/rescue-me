import React from 'react';
import { FILTERS } from './Helpers.js';

const Button = props => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
};
const isFilterSelected = (conditions, value) => {
  for (let group in conditions) {
    if (conditions[group].includes(value)) {
      return true;
    }
  }
  return false;
};
// Adds or removes a filter value to the list
const toggleFilter = (props, group, value) => {
  if (!props.conditions) return;
  const newConditions = Object.assign(props.conditions);
  // If filter group is not in conditions, add new group with value
  if (!(group in newConditions)) newConditions[group] = new Array(value);
  else {
    // If group is in conditions, and value is in group, remove it.
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
  props.setConditions(newConditions);
  return true;
};
export default class Filter extends React.Component {
  // Function to display buttons with filters for dogs
  getButtons = () => {
    return (
      //Buttons
      <div>
        <ul className="filters">
          {FILTERS.map(group => {
            return (
              <li key={group.name}>
                <h2>{group.label}</h2>
                <ul>
                  {group.values.map(value => (
                    <Button
                      key={value.name}
                      className={
                        isFilterSelected(this.props.conditions, value.name)
                          ? 'selected'
                          : ''
                      }
                      onClick={() =>
                        toggleFilter(this.props, group.name, value.name)
                      }
                      text={value.label}
                    />
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  render = () => {
    return <div>{this.getButtons()}</div>;
  };
}
