import React, { useRef } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>{
      (store) => {
        //let state = store.getState();
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);

        }
        return <MyPosts updateNewPostText={onPostChange}
          addPost={onAddPost}
          postsData={store.getState().profileReducer.postsData}
          newPostText={store.getState().profileReducer.newPostText} />
      }}
    </StoreContext.Consumer>)
}

export default MyPostsContainer;