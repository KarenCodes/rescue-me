import React from 'react';
import { RESCUE_ME_META } from './Helpers.js';

const Button = props => {
	return <button onClick={props.onClick}>{props.text}</button>;
};

export default class Filter extends React.Component {
	// Function to get filters present in dogs, could be used for a tag cloud
	getFilters = dogs => {
		const filters = [];
		// 1. For each meta in RESCUE_ME_META,
		// 1.1 filter the dogs, get the number of dogs with the meta
		// 2. Put filters in Local Storage
		RESCUE_ME_META.map(key => {
			const dogsWithMeta = dogs.filter(dog => {
				return dog.meta[key] === true;
			});
			if (dogsWithMeta.length > 0)
				filters.push({
					name: key,
					number: dogsWithMeta.length,
					slug: key
				});
			return true;
		});
		return filters;
	};

	// Ads a condition to the list - This is unfinished
	addCondition = (props, name, value) => {
		if (!props.conditions) return;
		const newConditions = Object.assign(props.conditions);
		name in newConditions ? delete newConditions[name] : (newConditions[name] = value);
		this.props.setConditions(newConditions);
		return true;
	};

	// Function to display buttons with filters for dogs
	getButtons = () => {
		return (
			//Buttons
			<div>
				<ul className="filters">
					{RESCUE_ME_META.map(group => {
						return (
							<li key={group.name}>
								<h2>{group.label}</h2>
								<ul>
									{group.values.map(value => (
										<Button
											key={value.name}
											onClick={() => this.addCondition(this.props, group.name, value.name)}
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
