import React from 'react';
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
			</article>
		</div>
	);
};

export default Dog;
