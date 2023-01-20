import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducersBatch = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    sidebarReducer,
    authReducer
});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;