import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dog from './Dog';
import WP_URL from './Helpers.js';
import Filter from './Filter.js';
import FilteredDogList from './FilteredDogsList.js';

export default class Dogs extends React.Component {
  state = {
    dogs: [],
    conditions: {}
  };

  setConditions = newConditions => {
    this.setState({ conditions: newConditions });
  };

  componentDidMount() {
    // Get dog data from WordPress site using the API for the custom post type rescue-me-dog
    // TODO: Store in local storage with timer, fetch only if not in local storage or timer out
    fetch(WP_URL)
      .then(response => {
        if (response.ok) return response.json();
        // If the custom post type is not insalled on the WordPress site, there will be a 404
        // Improvement: Add information of error on screen
        else throw Error(`Request rejected with status ${response.status}`);
      })
      .then(dogs => {
        this.setState({ dogs });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <article className="dogs container">
              <h1>Dogs</h1>
              <Filter
                dogs={this.state.dogs}
                conditions={this.state.conditions}
                setConditions={this.setConditions}
              />
              <ul>
                {this.state.dogs.length < 1 && (
                  <li key="empty">No dogs yet!</li>
                )}
                {
                  <React.Fragment>
                    <FilteredDogList
                      dogs={this.state.dogs}
                      conditions={this.state.conditions}
                    />
                  </React.Fragment>
                }
              </ul>
            </article>
          )}
        />
        <Route
          path="/dog/:dogSlug"
          render={props => {
            const dog = this.state.dogs.find(
              dog => dog.slug === props.match.params.dogSlug
            );
            if (dog) {
              return <Dog dog={dog} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
      </Switch>
    );
  }
}
