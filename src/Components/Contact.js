import React from 'react';
// Parser see https://medium.com/@remarkablemark/an-alternative-to-dangerously-set-innerhtml-64a12a7c1f96
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

const Contact = props => {
	const { dog } = props;
	const html = dog.content.rendered;
	const parserOptions = {
		replace: ({ attribs, children }) => {
			if (!attribs) return;

			if (attribs.class === 'wp-block-rescue-me-dog-block rm-contact') {
				console.log(children);
				return <div className="new-contact">{domToReact(children, parserOptions)}</div>;
			}
		}
	};
	const contactDiv = Parser(html, parserOptions);
	console.log(contactDiv);
	return contactDiv;
};

export default Contact;
