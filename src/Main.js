import React, { Component } from 'react';
import Dogs from './Dogs';
import Form from './Form';
import About from './About';

import { Switch, Route } from 'react-router-dom'


class Main extends Component {

  render() {
    return (
      <Switch>
      <Route exact path='/' component={Dogs}/>
      <Route path='/dog' component={Dogs}/>
      <Route path='/form' component={Form}/>
      <Route path='/about' component={About}/>
    </Switch>
    
    );
  }
}

export default Main;
