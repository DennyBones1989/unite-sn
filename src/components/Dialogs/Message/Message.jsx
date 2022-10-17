import c from './../../Dialogs/Dialogs.module.css';

const Message = (props) => {
  let alignClass = /*(props.loggedUserId == props.receiverId) ? c.messageRight : */c.messageLeft;
  return <div className={c.message+' '+alignClass}>{props.messageText}</div>
}

export default Message;