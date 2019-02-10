import React from 'react';

export default class Dog extends React.Component {

  render = () => {
    const { dog } = this.props;
    return (
      <article key={dog.id} className="dog container">
          <h2 dangerouslySetInnerHTML={{__html:dog.title.rendered}} />   
          <p dangerouslySetInnerHTML={{__html:dog.content.rendered}} />
          <hr></hr>
    </article>
    )
  }

}