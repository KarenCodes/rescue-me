import React from 'react';
import { Link } from 'react-router-dom'
export default class Header extends React.Component {

  render = () => {
    return (
      <nav id="navigation">
      <ul>
        <li><Link to='/'>Dogs</Link></li>
        <li><Link to='/form'>Form</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
    )
  }

}