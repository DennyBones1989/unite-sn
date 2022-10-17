import React, { useRef } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  //debugger;
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
    
  }


  return <MyPosts updateNewPostText={onPostChange} 
                  addPost={onAddPost} 
                  postsData={state.profileReducer.postsData}
                  newPostText = {state.profileReducer.newPostText}/>
}

export default MyPostsContainer;