import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  //debugger;
  return <div>
    <ProfileInfo />
    <MyPostsContainer/>
  </div>
}

export default Profile;