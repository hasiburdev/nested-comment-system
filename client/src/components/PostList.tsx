import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/posts";

export function PostList(): JSX.Element {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  const renderPosts = posts.map((post) => (
    <h1 key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </h1>
  ));

  return (
    <div>
      <h1>Post List</h1>
      {renderPosts}
    </div>
  );
}
