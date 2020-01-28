import React, { useState, useEffect } from "react";

import { fetchPosts } from "./api";
import SinglePost from "./SinglePost";
import Posts from "./Posts";
import Todos from "./Todos";

import "./App.css";

function App() {
  const [showPosts, setShowPosts] = useState(true);
  const [singlePostId, setSinglePostId] = useState(null);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((_posts) => setPosts(_posts));
  }, []);

  return (
    <div className="App">
      <p>
        <button
          onClick={() => setShowPosts(true)}
          className={`${showPosts ? "active-link" : ""}`}
        >
          Posts
        </button>
        <button
          onClick={() => setShowPosts(false)}
          className={`${!showPosts ? "active-link" : ""}`}
        >
          Todos
        </button>
      </p>

      <section>
        {singlePostId !== null ? (
          <SinglePost
            post={posts.find((post) => post.id === singlePostId)}
            goBack={() => setSinglePostId(null)}
          />
        ) : showPosts ? (
          <Posts posts={posts} showPost={(postId) => setSinglePostId(postId)} />
        ) : (
          <Todos />
        )}
      </section>
    </div>
  );
}

export default App;
