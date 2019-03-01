import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name';
import Image from './Image';
import Features from './Features';
import GoodWith from './GoodWith';

export default class DogCard extends React.Component {
	render = () => {
		const { dog } = this.props;

		return (
			<li className="dog-card" key={dog.id}>
				<article key={dog.id} className="dog container">
					<Image dog={dog} size={'thumbnail'} />
					<Name dog={dog} />
					<Features dog={dog} />
					<GoodWith dog={dog} />
					<button className="link-dog">
						<Link to={`/dog/${dog.slug}`}>More about {dog.title.rendered}</Link>
					</button>
				</article>
			</li>
		);
	};
}
