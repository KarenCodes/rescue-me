import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name';
import Image from './Image';
import Content from './Content';
import Features from './Features';
import GoodWith from './GoodWith';

export default class Dog extends React.Component {
	render = () => {
		const { dog } = this.props;

		return (
			<div className="dog-single">
				<article key={dog.id} className="dog container">
					<Image dog={dog} />
					<Name dog={dog} />
					<Content dog={dog} />
					<Features dog={dog} />
					<GoodWith dog={dog} />
				</article>

				<button className="more-dogs">
					<Link to="/">See More Dogs</Link>
				</button>
			</div>
		);
	};
}
