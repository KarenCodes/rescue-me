import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dog from './Components/Dog';
import Filter from './Filter.js';
import FilteredDogList from './FilteredDogsList.js';

const Dogs = props => {
	const { dogs, conditions, setConditions, username } = props;
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => (
					<article className="dogs container">
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
					</article>
				)}
			/>
			<Route
				exact
				path="/form"
				render={() => (
					<article className="dogs container">
						<h1>Matches for {username}</h1>
						{/* <Filter dogs={dogs} conditions={conditions} setConditions={setConditions} /> */}
						<ul className="dog-list">
							{dogs.length < 1 && <li key="empty">No dogs yet!</li>}
							{
								<React.Fragment>
									<FilteredDogList dogs={dogs} conditions={conditions} />
								</React.Fragment>
							}
						</ul>
					</article>
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
