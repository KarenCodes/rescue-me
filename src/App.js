import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
const authKey = 'Bearer <GENEREATED TOKEN HERE>';
const WordPressComUrl = 'brezov2testing3.wpcomstaging.com';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Posts />
      </div>
    );
  }
}

export default App;
