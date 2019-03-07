import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name';
import Image from './Image';
import Content from './Content';
import Features from './Features';
import GoodWith from './GoodWith';

const Dog = ({ dog }) => {
	return (
		<div className="dog-single">
			<article key={dog.id} className="dog container">
				<Image dog={dog} size={'medium_large'} />
				<Name dog={dog} />
				<Content dog={dog} />
				<Features dog={dog} />
				<GoodWith dog={dog} />

				<Link to="/" className="button-link">
					{' '}
					<button className="more-dogs">See More Dogs</button>
				</Link>
			</article>
		</div>
	);
};

export default Dog;
