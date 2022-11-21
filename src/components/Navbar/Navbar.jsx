import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar';
import StoreContext from '../../StoreContext';

const Navbar = () => {
  return (
    <StoreContext.Consumer>{
      
    (store) => {
      
      return <nav className={c.nav}>
        <div className={c.item}>
          <NavLink to="/profile" className={({ isActive }) => isActive ? c.active : null}>Profile</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/dialogs" className={({ isActive }) => isActive ? c.active : null}>Messages</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/users" className={({ isActive }) => isActive ? c.active : null}>Users</NavLink>
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

        {/*<FriendsBar state={store.getState().friendsBar} />*/}

      </nav>
    }
  }
  </StoreContext.Consumer>)
}

export default Navbar;