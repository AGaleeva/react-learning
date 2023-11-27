import "./styles.css"

function Avatar({avatarUrl, name}) {
  return (
    <img className="avatar-componet"
      src={avatarUrl}
      alt={name}
    />

  );
}

export default Avatar;