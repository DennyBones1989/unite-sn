import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return <div>
    <div>
      <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg" />
    </div>
    <div className={c.descriptionBlock}>ava + descr</div>
  </div>
}

export default ProfileInfo;