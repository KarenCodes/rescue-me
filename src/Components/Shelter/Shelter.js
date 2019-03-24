import React from 'react';

const Shelter = props => {
	const { shelter, shelterId } = props;

	return (
		<li key={shelterId}>
			<article key={shelterId} className="shelterId container">
				<h2 dangerouslySetInnerHTML={{ __html: shelter.title.rendered }} />
				<div dangerouslySetInnerHTML={{ __html: shelter.content.rendered }} />
				<div className="website-link">
					<a href={shelter.link}>Visit our website</a>
				</div>
			</article>
		</li>
	);
};

export default Shelter;
