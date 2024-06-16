import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
