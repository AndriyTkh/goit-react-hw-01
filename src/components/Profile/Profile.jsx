import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.bioBox}>
        <img className={css.profilePic} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>
      <ul className={css.infoList}>
        <li>
          <span>Followers </span>
          <span className={css.infoNum}>{followers}</span>
        </li>
        <li>
          <span>Views </span>
          <span className={css.infoNum}>{views}</span>
        </li>
        <li>
          <span>Likes </span>
          <span className={css.infoNum}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
