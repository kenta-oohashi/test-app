import { posts } from "./data/posts";

export default function PostsIndex() {
    return (
      <div className="post-list-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-card-info">
              <div className="create-data">{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className="post-categories">
                {post.categories.map((category) => (
                    <span key={category} className="post-tag">{category}</span>
                ))}
              </div>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
          </div>
        ))}
      </div>
    );
}