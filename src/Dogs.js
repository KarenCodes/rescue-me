import React from 'react';
export default class Dogs extends React.Component {
  state = {
  posts: []
  };
  componentDidMount() {
  fetch("https://hackathonkarenandbrezo.wpcomstaging.com/wp-json/wp/v2/dogs")
  .then(response => response.json())
  .then(posts => {
  this.setState({ posts });
  })
  .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <h1>Dogs</h1>
        <ul>
          {this.state.posts.map(post => (
            <div>
            <h2 key={post.id} dangerouslySetInnerHTML={{__html:post.title.rendered}} />   
            <p dangerouslySetInnerHTML={{__html:post.content.rendered}} />
            <hr></hr>
            </div>
            
          ))}
        </ul>
      </div>
    );
  }
}