import { NavLink } from 'react-router-dom';
import c from './Header.module.css';

const Header = (props) => {
    return <header className={c.header}>
          <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn'/>
          <div className={c.loginBlock}> {props.isAuth ? 
            props.login : 
            <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </header>
}

export default Header;