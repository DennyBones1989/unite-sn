import React, { useRef } from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
//import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';


/*const  DialogsContainer = () => {
  //debugger;
  //

  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();
        let onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        }

        let onUdateNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        }
        return <Dialogs updateNewMessageText={onUdateNewMessageText}
          sendMessage={onSendMessageClick}
          dialogsData={state.dialogsReducer.dialogsData}
          messagesData={state.dialogsReducer.messagesData}
          newMessageText={state.dialogsReducer.newMessageText} />
      }}
    </StoreContext.Consumer>)
}*/

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsReducer.dialogsData,
    messagesData: state.dialogsReducer.messagesData,
    newMessageText: state.dialogsReducer.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;