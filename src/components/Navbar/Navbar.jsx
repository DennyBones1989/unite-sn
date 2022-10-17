import c from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsBar from './FriendsBar';

const Navbar = (props) => {
    return <nav className={c.nav}>
    <div className={c.item}>
      <NavLink to="/profile" className={({ isActive }) => isActive ? c.active : null}>Profile</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="/dialogs" className={({ isActive }) => isActive ? c.active : null}>Messages</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="/news" className={({ isActive }) => isActive ? c.active : null}>News</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="/music" className={({ isActive }) => isActive ? c.active : null}>Music</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="/settings" className={({ isActive }) => isActive ? c.active : null}>Settings</NavLink>
    </div>
    
    <FriendsBar state={props.state.friendsBar}/>

  </nav>
}

export default Navbar;