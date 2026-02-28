function UserCard({ user, onPromote }) {
  return (
    <>
      <h1>{user.userName}</h1>
      <h2>{user.userRole}</h2>
      <button onClick={onPromote}>Promote</button>
    </>
  );
}

export default UserCard;