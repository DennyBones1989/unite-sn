import React, { useRef } from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {
  //debugger;
  let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} key={dialog.id}/>);
  let messagesElements = props.messagesData.map(message => <Message messageText={message.message} loggedUserId={props.loggedUserId} senderId={message.senderId} receiverId={message.receiverId} key={message.key}/>)
  let newMessageElement = useRef();
  let newMessageText = props.newMessageText;

  let onSendMessageClick = () => { 
    props.sendMessage();
  }

  let onNewMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  //if(!props.isAuth) return <Navigate to={"/login"}/>;

  return <div className={c.dialogs}>
    <div className={c.dialogsItems}>
      {dialogsElements}
    </div>
    <div className={c.messages}>
      {messagesElements}
    </div>
    <div>
      <div><textarea placeholder='Type your message' ref={newMessageElement} onChange={onNewMessageChange} value={newMessageText}></textarea></div>
      <div><button onClick={ onSendMessageClick }>Send</button></div>
    </div>
  </div>
}

export default Dialogs;