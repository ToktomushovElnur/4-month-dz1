import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { jsonplaceholderApi } from "../api";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let url
    const userId = searchParams.get("user");
    if (userId) {
      url = `/posts?userId=${userId}`;
    } else {
      url = "/posts";
    }
    const getPosts = async () => {
      const response = await jsonplaceholderApi.get(url);
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return (
      <div>
        <ul>
          {posts &&
              posts.map((post) => (
                  <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
              ))}
        </ul>
      </div>
  );
};
export default PostsPage;
