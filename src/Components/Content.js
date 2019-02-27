import React from 'react';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

/*
dog.content.rendered contains about, contact and video
Using dangerouslySetInnerHTML requires the html is put in a containing div.
That made it tricky to display the data where we want in the grid. HTML react parser converts the HTML to React element. You can modify the HTML which we did cause we could. Added to package.json dependencies.
https://medium.com/@remarkablemark/an-alternative-to-dangerously-set-innerhtml-64a12a7c1f96
https://github.com/remarkablemark/html-react-parser
*/

const Content = props => {
	const { dog } = props;
	const html = dog.content.rendered;
	const parserOptions = {
		replace: ({ attribs, children }) => {
			if (!attribs) return;
			// while we're here give contact a better class name :)
			if (attribs.class === 'wp-block-rescue-me-dog-block rm-contact') {
				console.log(children);
				return <div className="dog-contact">{domToReact(children, parserOptions)}</div>;
			}
		}
	};
	const contentDiv = Parser(html, parserOptions);
	return contentDiv;
};

export default Content;
