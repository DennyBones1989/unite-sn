const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    
    messagesData: [
        { id: 1, senderId: 2, receiverId: 1, message: 'Hi' },
        { id: 2, senderId: 1, receiverId: 2, message: 'How ere you?' },
        { id: 3, senderId: 2, receiverId: 1, message: 'All good?' },
        { id: 4, senderId: 1, receiverId: 2, message: 'yo' },
        { id: 5, senderId: 2, receiverId: 1, message: 'Wazzup' },
    ],
    dialogsData: [
        { id: 1, name: 'Stojan', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
        { id: 2, name: 'Shura', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
        { id: 3, name: 'Borya', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
        { id: 4, name: 'Stepan', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
        { id: 5, name: 'Moisha', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
        { id: 6, name: 'Givi', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                senderId: 2,
                receiverId: 1,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export default dialogsReducer;