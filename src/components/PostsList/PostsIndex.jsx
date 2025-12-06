import { posts } from "../../data/posts";
import style from './Posts.module.css';

export default function PostsIndex() {
    return (
      <div className={style["post-list-container"]}>
        {posts.map((post) => (
          <div key={post.id} className={style["post-card"]}>
            <div className={style["post-card-info"]}>
              <div className={style["create-data"]}>{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className={style["post-categories"]}>
                {post.categories.map((category) => (
                    <span key={category} className={style["post-tag"]}>{category}</span>
                ))}
              </div>
            </div>
            <h2 className={style["post-title"]}>{post.title}</h2>
            <div className={style["post-content"]} dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        ))}
      </div>
    );
}