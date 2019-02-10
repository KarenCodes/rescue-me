import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Dog from './Dog';

export default class Dogs extends React.Component {
  state = {
  dogs: []
  };
  componentDidMount() {
  fetch("https://hackathonkarenandbrezo.wpcomstaging.com/wp-json/wp/v2/dogs")
  .then(response => response.json())
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