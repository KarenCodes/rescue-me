import React from 'react';

const Name = props => {
	const { dog } = props;

	return <h2 className="dog-name"> {dog.title.rendered} </h2>;
};

export default Name;
