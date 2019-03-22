import React from 'react';
import { SHELTERS } from './Settings.js';
import SheltersList from './SheltersList.js';

export default class About extends React.Component {
  state = {
    shelters: []
  };
  fetchData = shelters => {
    for (let i in SHELTERS) {
      const aboutPageID = SHELTERS[i].aboutID;
      fetch(`${SHELTERS[i].url}wp-json/wp/v2/pages/${aboutPageID}`)
        .then(response => {
          if (response.ok) return response.json();
          else throw Error(`Request rejected with status ${response.status}`);
        })
        .then(aboutPage => {
          // Add shelter info to dog
          this.setState({ shelters: [...this.state.shelters, aboutPage] });
        })
        .catch(error => console.error(error));
    }
  };

  componentDidMount(props) {
    this.fetchData();
  }

  render = () => {
    return (
      <section className="shelters container">
        <h2>Shelters</h2>
        <ul className="shelter-list">
          {this.state.shelters.length < 1 && (
            <li key="empty">Loading Shelters!</li>
          )}
          {
            <React.Fragment>
              <SheltersList shelters={this.state.shelters} />
            </React.Fragment>
          }
        </ul>
      </section>
    );
  };
}
