import React from 'react';

const GoodWith = props => {
	const { dog } = props;
	const goodWithDogs = dog.meta.rescue_me_meta_good_with_dogs ? 'Dogs' : null;
	const goodWithCats = dog.meta.rescue_me_meta_good_with_cats ? 'Cats' : null;
	const goodWithKids = dog.meta.rescue_me_meta_good_with_kids ? 'Kids' : null;

	if (goodWithDogs || goodWithCats || goodWithKids) {
		return (
			<div className="good-with">
				<h4>{dog.title.rendered} is Good With:</h4>
				<ul>
					{goodWithDogs ? (
						<li key="gwdogs">
							<i className="fas fa-dog" />
							{goodWithDogs}
						</li>
					) : null}
					{goodWithCats ? (
						<li key="gwcats">
							<i className="fas fa-cat" />
							{goodWithCats}
						</li>
					) : null}
					{goodWithKids ? (
						<li key="gwkids">
							<i className="fas fa-child" />
							{goodWithKids}
						</li>
					) : null}
				</ul>
			</div>
		);
	} else return null;
};

export default GoodWith;
