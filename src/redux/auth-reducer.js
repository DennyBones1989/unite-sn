import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';


let inicialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            //debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }

};

export const isAuthThunk = () => {
    return (dispatch) => {
        authAPI.isAuthorised().then(response => {
            if (response.resultCode === 0) {
                let { id, email, login } = response.data;
                dispatch(setAuthUserDataAC(id, email, login));
            }
        });
    }
}

export const setAuthUserDataAC = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId: userId, email: email, login: login } });

export default authReducer;