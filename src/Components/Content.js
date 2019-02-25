import React from 'react';

const Content = props => {
	const { dog } = props;

	const html = dog.content.rendered;

	return <div className="dog-content" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Content;
