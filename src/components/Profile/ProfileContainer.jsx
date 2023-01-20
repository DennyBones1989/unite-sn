import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfileAC, getProfileThunk } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getProfileThunk(userId);
  }

  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile} />
    </div>
  }

}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileAC, getProfileThunk })(withUrlDataContainerComponent);