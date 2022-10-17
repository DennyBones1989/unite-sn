import React, { useRef } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {
  //debugger;
  let postsElements = props.postsData.map(p => <Post message={p.message} likes={p.likes} dislikes={p.dislikes} />)
  const newPostElement = useRef();
  
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }


  return <div className={c.postsBlock}><h3>My posts</h3>
    <div className={c.new_item}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={  onAddPost }>Add post</button>
      </div>
    </div>
    <div className={c.posts}>
      {postsElements}
    </div>
  </div>
}

export default MyPosts;