import c from './Post.module.css';

const Post = (props) => {
    return (
      <div className={c.item}>
        <img src="https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png"></img>
        {props.message} 
        <button>Like</button> ({props.likes})
        <button>Dislike</button> ({props.dislikes})
        </div>
      )
      
}

export default Post;