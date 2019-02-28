import React from 'react';

const GoodWith = props => {
	const { dog } = props;
	const goodWithDogs = dog.meta.rescue_me_meta_good_with_dogs ? 'Good With Dogs' : null;
	const goodWithCats = dog.meta.rescue_me_meta_good_with_cats ? 'Good With Cats' : null;
	const goodWithKids = dog.meta.rescue_me_meta_good_with_kids ? 'Good With Kids' : null;

	return (
		<ul className="good-with">
			{goodWithDogs ? <li>{goodWithDogs}</li> : null}
			{goodWithCats ? <li>{goodWithCats}</li> : null}
			{goodWithKids ? <li>{goodWithKids}</li> : null}
		</ul>
	);
};

export default GoodWith;
