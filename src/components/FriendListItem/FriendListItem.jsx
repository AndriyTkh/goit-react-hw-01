import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  const classClsx = clsx(css.status, isOnline ? css.active : css.inactive);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={classClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
