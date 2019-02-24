import React from 'react';

export default class Dog extends React.Component {
	render = () => {
		const { dog } = this.props;
		// get featured image - size options: thumbnail, medium, medium_large, full
		const image = dog._embedded['wp:featuredmedia']['0']['media_details']['sizes']['medium_large'].source_url;
		// get alt text if none, use title +  text
		const alt =
			dog._embedded['wp:featuredmedia']['0']['alt_text'] || dog.title.rendered + ' - dog available for adoption';
		console.log(image);
		return (
			<article key={dog.id} className="dog container">
				<h2 dangerouslySetInnerHTML={{ __html: dog.title.rendered }} />
				<img src={image} alt={alt} />
				<p dangerouslySetInnerHTML={{ __html: dog.content.rendered }} />
				<hr />
			</article>
			// need a back button
		);
	};
}
