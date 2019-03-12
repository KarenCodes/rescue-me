import React, { Component } from 'react';
import WP_URL from './Helpers.js';
import Dogs from './Dogs';
import Form from './Form';
import About from './About';

import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  state = {
    dogs: [],
    conditions: {}
  };

  setConditions = newConditions => {
    this.setState({ conditions: newConditions });
  };

  componentDidMount() {
    // Get dog data from WordPress site using the API for the custom post type rescue-me-dog

    fetch(WP_URL)
      .then(response => {
        if (response.ok) return response.json();
        // If the custom post type is not insalled on the WordPress site, there will be a 404
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
          render={() => {
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
          path="/dog"
          render={() => {
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
            return (
              <Form
                dogs={this.state.dogs}
                conditions={this.state.conditions}
                setConditions={this.setConditions}
              />
            );
          }}
        />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default Main;
