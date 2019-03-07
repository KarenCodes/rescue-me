import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as Logo } from './logo.svg';

export default class Header extends React.Component {
	render = () => {
		return (
			<header>
				<div className="site-name">
					<NavLink exact to="/">
						<i className="fas fa-life-ring" />
						Rescue Me
					</NavLink>
				</div>

				{/* using NavLink instead of link because it adds class="active" to active link
      note "exact" for home page to prevent it from matching other links  */}
				<nav id="navigation">
					<ul>
						<li>
							<NavLink exact to="/">
								Dogs
							</NavLink>
						</li>
						<li>
							<NavLink to="/form">Form</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	};
}
