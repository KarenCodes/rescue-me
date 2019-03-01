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
				<article key={dog.id} className="doglist container">
					<Link className="card-link" key={dog.id} to={`/dog/${dog.slug}`}>
						<Image dog={dog} size={'medium'} />
						<Name dog={dog} />
						<Features dog={dog} />
						<GoodWith dog={dog} />
					</Link>
				</article>
			</li>
		);
	};
}
