import React from 'react';
import { setCurrentPage,  toggleIsFollowingProgress, getUsersThunk, followThunk, unfollowThunk } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    /*constructor(props) {
        super(props);
        //if (this.props.users.length === 0) {

        //}
    }*/

    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        //debugger
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow} 
                followingInProgress={this.props.followingInProgress}/></>
    }
}


let mapStateToProps = (state) => {
    //debugger;
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress,
        toggleIsFollowingProgress: state.usersReducer.toggleIsFollowingProgress

    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/
export default connect(mapStateToProps, {
    follow: followThunk, unfollow: unfollowThunk,  setCurrentPage, toggleIsFollowingProgress, getUsers: getUsersThunk})(UsersContainer);