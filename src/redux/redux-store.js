import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducersBatch = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
});

let store = createStore(reducersBatch);
export default store;