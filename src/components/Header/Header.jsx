import style from './Header.module.css';

export default function Header() {
    return(
      <div className={style["header"]}>
        <a href="#">Blog</a>
        <a href="#">お問い合わせ</a>
      </div>
    )
}