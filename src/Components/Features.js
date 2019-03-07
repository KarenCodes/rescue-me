import React from 'react';

const Features = props => {
	const { dog } = props;
	const gender = dog.meta.rescue_me_meta_gender;
	const size = dog.meta.rescue_me_meta_size;
	const age = dog.meta.rescue_me_meta_age;

	if (gender || size || age) {
		return (
			<ul className="features">
				{gender ? <li key="gender">{gender}</li> : null}
				{age ? <li key="age">{age}</li> : null}
				{size ? <li key="size">{size}</li> : null}
			</ul>
		);
	} else return null;
};

export default Features;
