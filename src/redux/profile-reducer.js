const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hey there', likes: 12, dislikes: 2 },
        { id: 2, message: 'How ere you?', likes: 8, dislikes: 1 },
        { id: 3, message: 'Hello', likes: 23, dislikes: 8 },
        { id: 4, message: 'This is my first post', likes: 32, dislikes: 0 },
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{ 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
                dislikes: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],
                
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state;
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;