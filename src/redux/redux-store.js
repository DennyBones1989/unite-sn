import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducersBatch = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    sidebarReducer
});

let store = createStore(reducersBatch);
window.store = store;
export default store;