import React from 'react';

const Image = props => {
	const { dog } = props;
	// add a prop to say which to use - hardcoded for now
	const size = 'medium_large';
	// get featured image - size options: thumbnail, medium, medium_large, full
	const image = dog._embedded['wp:featuredmedia']['0']['media_details']['sizes'][size].source_url;
	// get alt text if none, use title +  some text
	const alt =
		dog._embedded['wp:featuredmedia']['0']['alt_text'] || dog.title.rendered + ' - dog available for adoption';

	return <img className="dog-image" src={image} alt={alt} />;
};

export default Image;
