import Preloader from '../../../Common/Preloader/Preloader';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  let contactsInfo = props.profile.contacts;
  return <div>
    {/*<div>
      <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg" />
</div>*/}
    <div className={c.descriptionBlock}>
      <div className={c.avaHolder}>
        <img src={(props.profile != null) ? props.profile.photos.large : ''} />
      </div>
      <div className={c.fullNameHolder}>{props.profile.fullName}</div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <div className={c.aboutMeHolder}>{props.profile.aboutMe}</div>
      <div>{
        (props.profile.lookingForAJob === true) ? 'Looking for some new opportunities' : 'Currently occupied'
      }</div>
      <div>{(props.profile.lookingForAJobDescription) ? props.profile.lookingForAJobDescription : ''}</div>
      <div>
        Contact information:
        {Object.entries(contactsInfo).map(entry => {
          let [key, value] = entry;
          if (value) return(<div>{key}: {value}</div>);
        })}
      </div>
    </div>
  </div>
}

export default ProfileInfo;