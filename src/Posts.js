import React from 'react';
export default class Posts extends React.Component {
  state = {
  posts: []
  };
  componentDidMount() {
  fetch("https://hackathonkarenandbrezo.wpcomstaging.com/wp-json/wp/v2/posts")
  .then(response => response.json())
  .then(posts => {
  this.setState({ posts });
  })
  .catch(error => console.error(error));
  }
  render() {
    return (
      <header>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => (
            <div>
            <li key={post.id}>{post.title.rendered}</li>
            <p>{post.content.rendered}</p></div>
          ))}
        </ul>
      </header>
    );
  }
}