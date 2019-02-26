import React from 'react';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

const Video = props => {
	const { dog } = props;
	const html = dog.content.rendered;
	const parserOptions = {
		replace: ({ attribs, children }) => {
			if (!attribs) return;
			console.log('A', attribs);
			if (attribs.class === 'embed-youtube') {
				console.log(children);
				return <div className="new-youtube">{domToReact(children, parserOptions)}</div>;
			}
		}
	};
	const videoDiv = Parser(html, parserOptions);
	console.log(videoDiv);
	return videoDiv;
};

export default Video;
