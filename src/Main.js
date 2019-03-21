import React, { Component } from 'react';
import { SHELTERS, shuffle } from './Settings.js';
import Dogs from './Dogs';
import Form from './Form';
import About from './About';

import { Switch, Route } from 'react-router-dom';

// Main component that displays list of dogs, form to match a dog and about page with info on shelters
class Main extends Component {
  /* State with
   * dogs : Array of object with list of dogs
   * conditions: Object that contains the filters selected to filter dogs list
   * shelters: Array of object with information on shelters
   */
  state = {
    dogs: [],
    conditions: {},
    shelters: []
  };

  setConditions = newConditions => {
    this.setState({ conditions: newConditions });
  };

  // Ads shelter info and siteId to dogs.
  addShelterInfo = (dogs, shelter, siteId) => {
    dogs.map(dog => {
      dog.id = dog.id + siteId; // add shelter number to have unique id
      dog.shelterURL = shelter.url; // add shelter URL
      dog.shelterName = shelter.name; // add shelter name
      return dog;
    });
  };

  // Creates shelter from site info
  createShelter = site => {
    return [
      {
        name: site.name,
        url: site.url,
        description: site.description
      }
    ];
  };

  // Fetches data from WordPress sites.
  // For each shelter, get list of dogs, add shelter info to dogs
  // Populate shelters and dogs in state
  fetchData = () => {
    for (let i in SHELTERS) {
      fetch(`${SHELTERS[i].url}wp-json/`)
        .then(response => {
          if (response.ok) return response.json();
          else throw Error(`Request rejected with status ${response.status}`);
        })
        .then(site => {
          const shelter = this.createShelter(site);
          this.setState({ shelters: [...shelter, ...this.state.shelters] });
          return shelter;
        })
        .then(shelter => {
          fetch(
            `${SHELTERS[i].url}wp-json/wp/v2/rescue_me_dogs?per_page=100&_embed`
          )
            .then(response => {
              if (response.ok) return response.json();
              // If the custom post type is not insalled on the WordPress site, there will be a 404
              else
                throw Error(`Request rejected with status ${response.status}`);
            })
            .then(dogs => {
              // Add shelter info to dog
              this.addShelterInfo(dogs, shelter[0], i);
              // Combine new dogs with dogs in state and shuffle them
              const moreDogs = shuffle([...this.state.dogs, ...dogs]);
              this.setState({ dogs: moreDogs });
            })
            .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
    }
  };

  // When component mounts, fetch data from WordPress sites
  componentDidMount() {
    this.fetchData();
  }

  // Renders Dogs, Form or About.
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            // Display list of dogs
            return (
              <Dogs
                dogs={this.state.dogs}
                conditions={this.state.conditions}
                setConditions={this.setConditions}
              />
            );
          }}
        />
        <Route
          path="/form"
          render={() => {
            // Display form to match a dog
            return <Form dogs={this.state.dogs} />;
          }}
        />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default Main;
