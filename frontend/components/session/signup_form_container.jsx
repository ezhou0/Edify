import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log in</Link>,
        homeLink: <Link to='/'> <div className='logo_div'>
            <img className="logo" src={window.edifyURL} alt="Edify Logo" /> <div className='logo-text'>dify</div>
        </div></Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
