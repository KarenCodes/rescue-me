import React from 'react';
// Parser see https://medium.com/@remarkablemark/an-alternative-to-dangerously-set-innerhtml-64a12a7c1f96
import Parser from 'html-react-parser';

const Contact = props => {
	const { dog } = props;

	const html = dog.content.rendered;
	const parsed = parse(html);
	console.log(parsed);

	return <div className="dog-contact">Contact to replace</div>;
};

export default Contact;
