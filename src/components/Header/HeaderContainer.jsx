import React from 'react';
import axios from 'axios';
import Header from './Header';
import {setAuthUserDataAC, isAuthThunk} from './../../redux/auth-reducer';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    

    componentDidMount(){
        this.props.isAuthThunk();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth:state.authReducer.isAuth,
    login:state.authReducer.login
});

export default connect(mapStateToProps, {setAuthUserDataAC, isAuthThunk})(HeaderContainer);