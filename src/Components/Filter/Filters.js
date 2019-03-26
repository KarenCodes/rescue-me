import React from 'react';
import { FILTERS, SINGLE_FILTERS } from '../../Settings.js';
import FilterButton from './FilterButton.js';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// Function to display "Good With" Filters Buttons
const getGoodWithFilterButtons = (conditions, setConditions) => {
  return (
    //Buttons
    <div className="filters">
      <h4>Good With</h4>
      <ul key="top">
        {SINGLE_FILTERS.map(group => {
          return (
            // Display filters in group
            group.values.map(value => (
              <li key={value.name}>
                <FilterButton
                  key={value.name}
                  conditions={conditions}
                  setConditions={setConditions}
                  group={group}
                  value={value}
                  text={group.label}
                />
              </li>
            ))
          );
        })}
      </ul>
    </div>
  );
};

// Function to display buttons with filters for dogs
const getFilterButtons = (conditions, setConditions) => {
  return (
    //Buttons
    <div>
      <ul key="secondary" className="filters">
        {// Display groups of filters
        FILTERS.map(group => {
          return (
            <li key={group.name}>
              <h4>{group.label}</h4>
              <ul>
                {// Display filters in group
                group.values.map(value => (
                  <li key={value.name}>
                    <FilterButton
                      key={value.name}
                      conditions={conditions}
                      setConditions={setConditions}
                      group={group}
                      value={value}
                      text={value.label}
                    />
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default class Filter extends React.Component {
  render = () => {
    return (
      <div>
        <Accordion>
          {/* use expanded={true} on AccordionItem to have it default to open*/}
          <AccordionItem className={'accordion__item--has-icon'}>
            <AccordionItemTitle
              className={'accordion__title accordion__title--animated'}
            >
              <h4>Filtered search</h4>
              <div className="accordion__arrow" role="presentation" />
            </AccordionItemTitle>
            <AccordionItemBody>
              {getGoodWithFilterButtons(
                this.props.conditions,
                this.props.setConditions
              )}
              {getFilterButtons(
                this.props.conditions,
                this.props.setConditions
              )}
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
}
