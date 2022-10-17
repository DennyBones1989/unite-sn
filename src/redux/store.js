import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _callSubscriber() {
        console.log('someting changed!');
    },
    _state: {
        generalInfo: {
            loggedUserId: 1
        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Hey there', likes: 12, dislikes: 2 },
                { id: 2, message: 'How ere you?', likes: 8, dislikes: 1 },
                { id: 3, message: 'Hello', likes: 23, dislikes: 8 },
                { id: 4, message: 'This is my first post', likes: 32, dislikes: 0 },
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
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
        },
        sidebar: {
            friendsBar: [
                { id: 1, name: 'Stojan', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
                { id: 2, name: 'Stepan', ava: 'https://assets.reedpopcdn.com/get8.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/get8.jpg' },
                { id: 3, name: 'Givi', ava: 'https://i1.sndcdn.com/artworks-qiELNBYjiAoYDLeo-gwLXDg-t500x500.jpg' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { //{type: 'ADD-POST'}
        console.log('entrou');
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

        
    }
}

window.store = store;
export default store;