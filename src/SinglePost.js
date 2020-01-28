import React, { Fragment } from "react";

const SinglePost = ({ post, goBack }) => {
  return (
    <Fragment>
      <h2>Single Post: {post.title}</h2>
      <p>{post.body}</p>
      <p>
        <button onClick={goBack}>Go back to posts</button>
      </p>
    </Fragment>
  );
};

export default SinglePost;
