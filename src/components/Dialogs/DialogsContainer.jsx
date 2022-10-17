import React, { useRef } from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {
  //debugger;
  let state = props.store.getState();

  let onSendMessageClick = () => { 
    props.store.dispatch(sendMessageActionCreator());
  }

  let onUdateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (<Dialogs updateNewMessageText={onUdateNewMessageText} 
                   sendMessage={onSendMessageClick} 
                   dialogsData={state.dialogsReducer.dialogsData}
                   messagesData={state.dialogsReducer.messagesData}
                   newMessageText={state.dialogsReducer.newMessageText}/>);
}

export default DialogsContainer;