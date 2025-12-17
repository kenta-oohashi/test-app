import { useParams } from "react-router-dom";
import { posts } from "../../data/posts";
import style from './PostsDetail.module.css';


export default function PostsDetail() {
  
  const { id } = useParams();

  const detailPost = posts.find(post => String(post.id) === id)

  if(!detailPost) {
   return (
     <div role="alert">
        <h1>404 Not Found</h1>
        <p>記事は見つかりませんでした。</p>
      </div>
   );
  }

  return (
<div>
  <div className={style["post-list-container"]}>
    <img src="https://placehold.jp/800x400.png" alt="ダミー画像" />
    <div className={style["post-card-info"]}>
      <div className={style["create-data"]}>{new Date(detailPost.createdAt).toLocaleDateString()}</div>
        <div className={style["post-categories"]}>
          {detailPost.categories.map((category) => (
            <span key={category} className={style["post-tag"]}>{category}</span>
              ))}
        </div>
    </div>
    <h2 className={style["post-title"]}>{detailPost.title}</h2>
    <div className={style["post-content"]} dangerouslySetInnerHTML={{ __html: detailPost.content }}></div>
  </div>
</div>
)}