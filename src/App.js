import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
