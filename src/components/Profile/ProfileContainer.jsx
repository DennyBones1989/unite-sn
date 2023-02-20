import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfileAC, getProfileThunk, setStatusAC,  updateStatusThunk, getStatusThunk } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    //debugger
    let userId = this.props.match.params.userId;
    if (!userId) userId = 27217;
    this.props.getProfileThunk(userId);
    //setTimeout(()=> {
      this.props.getStatusThunk(userId);
    //}, 1000)
    
  }

  render() {
    
    return <div>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk} getStatus={this.props.getStatusThunk}/>
    </div>
  }

}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status
});

export default compose(
  connect(mapStateToProps, { setUserProfileAC, getProfileThunk, /*setStatusAC,*/ updateStatusThunk, getStatusThunk }),
  withRouter, 
  //withAuthRedirect
)(ProfileContainer);



/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setUserProfileAC, getProfileThunk })(withUrlDataContainerComponent);*/