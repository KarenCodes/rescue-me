import React from 'react';

const Features = props => {
	const { dog } = props;
	const gender = dog.meta.rescue_me_meta_gender;
	const size = dog.meta.rescue_me_meta_size;
	const age = dog.meta.rescue_me_meta_age;

	return (
		<ul className="features">
			{gender ? <li>{gender}</li> : null}
			{age ? <li>{age}</li> : null}
			{size ? <li>{size}</li> : null}
		</ul>
	);
};

export default Features;
