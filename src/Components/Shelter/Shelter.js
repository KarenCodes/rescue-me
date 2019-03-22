import React from 'react';

const Shelter = props => {
  const { shelter, shelterId } = props;
  console.log('shelter', shelter);
  return (
    <li key={shelterId}>
      <article key={shelterId} className="shelterId container">
        <h2 dangerouslySetInnerHTML={{ __html: shelter.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: shelter.content.rendered }} />
      </article>
    </li>
  );
};

export default Shelter;
