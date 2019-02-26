import React from 'react';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

const Content = props => {
	const { dog } = props;
	const html = dog.content.rendered;
	const parserOptions = {
		replace: ({ attribs, children }) => {
			if (!attribs) return;
			console.log('A', attribs);
			if (attribs.class === 'rescue-me-about') {
				console.log(children);
				return <div className="new-about">{domToReact(children, parserOptions)}</div>;
			}
		}
	};
	const contentDiv = Parser(html, parserOptions);
	console.log(contentDiv);
	return contentDiv;
};

export default Content;
