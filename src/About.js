import React from 'react';
import { Helmet } from 'react-helmet';
import { SHELTERS } from './Settings.js';
import SheltersList from './Components/SheltersList.js';

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
      <main>
        <Helmet>
          <title>About our rescue - Rescue Me</title>
          <meta
            name="description"
            content="Find out more about our dog rescue and what you can do to help."
          />
        </Helmet>
        <section className="shelters container">
          <h1>About Our Rescue</h1>
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
      </main>
    );
  };
}
