import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from './logo.svg';

export default class Header extends React.Component {
	render = () => {
		return (
			<header>
				<div className="site-name">
					<i className="fas fa-life-ring" />
					Rescue Me
				</div>

				<nav id="navigation">
					<ul>
						<li>
							<Link to="/">Dogs</Link>
						</li>
						<li>
							<Link to="/form">Form</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	};
}
