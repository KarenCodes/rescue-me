import React from 'react';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import Shelter from './Shelter';

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
			if (!attribs || !attribs.class) return;
			// contact - change class and add title
			if (attribs.class === 'wp-block-rescue-me-dog-block rm-contact') {
				return (
					<div className="dog-contact">
						<h4>Ask Me About {dog.title.rendered}</h4>
						{domToReact(children, parserOptions)}
						<Shelter dog={dog} />
					</div>
				);
				// about - change class and add title
			} else if (attribs.class === 'rescue-me-about') {
				return (
					<div className="dog-about">
						<h4>About {dog.title.rendered} </h4>
						<p>{domToReact(children, parserOptions)}</p>
					</div>
				);
				// video - change class and add title - this one has variable classes so use search for string
			} else if (attribs.class.search('rescue-me-video') > 0) {
				return (
					<div className="dog-video">
						<h4>Watch {dog.title.rendered} </h4>
						{domToReact(children, parserOptions)}
					</div>
				);
			}
		}
	};
	const contentDiv = Parser(html, parserOptions);
	return contentDiv;
};

export default Content;
