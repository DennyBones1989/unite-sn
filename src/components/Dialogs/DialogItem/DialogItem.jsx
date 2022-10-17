import c from './../../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return <div className={c.dialog + ' ' + c.active}>
    <img alt={props.name} src={props.ava}/><NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default DialogItem;