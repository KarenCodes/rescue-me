import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
          <main>
            <section className="dogs container">
              <h1>Dogs</h1>
              <Filter
                dogs={dogs}
                conditions={conditions}
                setConditions={setConditions}
              />
              <ul className="dog-list">
                {dogs.length < 1 && <li key="empty">No dogs yet!</li>}
                {
                  <React.Fragment>
                    <FilteredDogList dogs={dogs} conditions={conditions} />
                  </React.Fragment>
                }
              </ul>
            </section>
          </main>
        )}
      />
      <Route
        exact
        path="/form"
        render={() => (
          <section className="dogs container">
            <h2>Matches for {username ? username : 'you'}</h2>
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
    </Switch>
  );
};

export default Dogs;
