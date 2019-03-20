import React from 'react';
import { FILTERS, SINGLE_FILTERS } from './Helpers.js';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';

const Button = props => {
	return (
		<button onClick={props.onClick} className={props.className}>
			{props.text}
		</button>
	);
};
const FilterButton = props => {
	return (
		<Button
			className={isFilterSelected(props.props.conditions, props.group.name, props.value.name) ? 'selected' : null}
			onClick={() =>
				toggleFilter(props.props.conditions, props.props.setConditions, props.group.name, props.value.name)
			}
			text={props.text}
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
// Adds or removes a filter value to the list
const toggleFilter = (conditions, setConditions, group, value) => {
	if (!conditions) return;
	const newConditions = Object.assign(conditions);
	// If filter group is not in conditions, add new group with value
	if (!(group in newConditions)) newConditions[group] = new Array(value);
	else {
		// If group is in conditions, and value is in group, remove it.
		if (newConditions[group].find(valueC => valueC === value)) {
			newConditions[group] = newConditions[group].filter(conditionsValue => conditionsValue !== value);
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
export default class Filter extends React.Component {
	// Function to display top filters
	getTopButtons = () => {
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
										props={this.props}
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
	getButtons = () => {
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
												props={this.props}
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
	render = () => {
		return (
			<div>
				<Accordion>
					{/* use expanded={true} on AccordionItem to have it default to open*/}
					<AccordionItem className={'accordion__item--has-icon'}>
						<AccordionItemTitle className={'accordion__title accordion__title--animated'}>
							<h4>Filtered search</h4>
							<div className="accordion__arrow" role="presentation" />
						</AccordionItemTitle>
						<AccordionItemBody>
							{this.getTopButtons()}
							{this.getButtons()}
						</AccordionItemBody>
					</AccordionItem>
				</Accordion>
			</div>
		);
	};
}
