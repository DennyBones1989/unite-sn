import c from './Navbar.module.css';

const FriendsBar = (props) => {
  let friendsElements = props.state.map(el =>

    <div className={c.sidebarFriend}>
      <div className={c.avatarHolder}>
        <img src={el.ava} />
      </div>
      <div className={c.sidebarFriendName}>{el.name}</div>
    </div>);

  return <div className={c.sidebarFriendContainer}>
    <h3>Friends</h3>
    {friendsElements}
  </div>
}

export default FriendsBar;