import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors,
        formType: 'login',
        navLink: <Link className = 'login-to-signup-link'to="/signup">SIGN UP FOR EDIFY</Link>,
        homeLink: <Link to='/'> <div className='logo_div_login'>
        <img className="logo" src={window.edifyURL} alt="Edify Logo" /> <div className='logo-text'>dify</div> 
        </div></Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
