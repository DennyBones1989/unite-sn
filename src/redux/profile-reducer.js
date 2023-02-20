import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const GET_STATUS = 'GET-STATUS';

let initialState = {
    postsData: [
        { id: 1, message: 'Hey there', likes: 12, dislikes: 2 },
        { id: 2, message: 'How ere you?', likes: 8, dislikes: 1 },
        { id: 3, message: 'Hello', likes: 23, dislikes: 8 },
        { id: 4, message: 'This is my first post', likes: 32, dislikes: 0 },
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        /*case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }*/
        default:
            return state;
    }

}

export const addPostAC = () => ({ type: ADD_POST });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextAC = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const setStatusAC = (status) => ({ type: SET_STATUS, status });
//export const getStatusAC = (userId, status) => ({type: GET_STATUS, userId: userId, status: status})



export const getProfileThunk = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfileAC(response));
    });
}

export const getStatusThunk = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatusAC(response));
    });
}

export const updateStatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatusAC(status));
        }
    });
}


export default profileReducer;