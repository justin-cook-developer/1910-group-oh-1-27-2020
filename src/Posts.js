import React from "react";

const Posts = ({ showPost, posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} onClick={() => showPost(post.id)}>
          Post: {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
