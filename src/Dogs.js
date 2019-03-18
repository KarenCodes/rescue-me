import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dog from './Components/Dog/Dog';
import Filter from './Filter.js';
import FilteredDogList from './FilteredDogsList.js';

const Dogs = props => {
	const { dogs, conditions, setConditions, username } = props;
	console.log(conditions);
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => (
					<section className="dogs container">
						<h1>Dogs</h1>
						<Filter dogs={dogs} conditions={conditions} setConditions={setConditions} />
						<ul className="dog-list">
							{dogs.length < 1 && <li key="empty">No dogs yet!</li>}
							{
								<React.Fragment>
									<FilteredDogList dogs={dogs} conditions={conditions} />
								</React.Fragment>
							}
						</ul>
					</section>
				)}
			/>
			<Route
				exact
				path="/form"
				render={() => (
					<section className="dogs container">
						<h2>Matches for {username ? username : 'you'}</h2>
						{/* <Filter dogs={dogs} conditions={conditions} setConditions={setConditions} /> */}
						<ul className="dog-list">
							{dogs.length < 1 && <li key="empty">No dogs match!</li>}
							{
								<React.Fragment>
									<FilteredDogList dogs={dogs} conditions={conditions} />
								</React.Fragment>
							}
						</ul>
					</section>
				)}
			/>
			<Route
				path="/dog/:dogSlug"
				render={props => {
					const dog = dogs.find(dog => dog.slug === props.match.params.dogSlug);
					if (dog) {
						return <Dog dog={dog} />;
					} else {
						return <Redirect to="/" />;
					}
				}}
			/>
		</Switch>
	);
};

export default Dogs;
