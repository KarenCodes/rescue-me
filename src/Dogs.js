import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Dog from './Dog';
import WP_URL from './Helpers.js';

export default class Dogs extends React.Component {
  state = {
  dogs: [],
  };
  componentDidMount() {
  // Get dog data from WordPress site using the API for the custom post type rescue-me-dog
  fetch(WP_URL)
  .then(response => {
    if (response.ok ) return response.json();
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
        render = { () =>(
            <article className="dogs container">
              <h1>Dogs</h1>
              <ul>
                {this.state.dogs.length < 1 && <li key="empty">No dogs yet!</li>}
                {this.state.dogs.map(dog => (
                  <li key={dog.id}>
                  <h2 dangerouslySetInnerHTML={{__html:dog.title.rendered}} />   
                  <p dangerouslySetInnerHTML={{__html:dog.content.rendered}} />
                  <Link to={`/dog/${dog.slug}`}>Learn more about {dog.title.rendered}</Link>
                  <hr></hr>
                  </li>
                ))}
              </ul>
            </article>
        )}
      />
      <Route 
        path= "/dog/:dogSlug"
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