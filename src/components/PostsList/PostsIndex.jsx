import style from "./Posts.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostsIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
    };
    fetcher();
  }, []);

  return (
    <div className={style["post-list-container"]}>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/posts/${post.id}`}
          className={style["post-card"]}
        >
          <div className={style["post-card-info"]}>
            <div className={style["create-data"]}>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className={style["post-categories"]}>
              {post.categories.map((category) => (
                <span key={category} className={style["post-tag"]}>
                  {category}
                </span>
              ))}
            </div>
          </div>
          <h2 className={style["post-title"]}>{post.title}</h2>
          <div
            className={style["post-content"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </Link>
      ))}
    </div>
  );
}
