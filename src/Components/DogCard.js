import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name';
import Image from './Image';
import Features from './Features';
import GoodWith from './GoodWith';

const DogCard = ({ dog }) => {
	// if dog doesn't have a name don't show it
	if (dog.title.rendered) {
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
	} else return null;
};

export default DogCard;
