import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '', 
           
            // month: '',
            // day: '',
            // year: '',
            
            
        };
        this.usernameErrors = "username_errors_hidden";
        this.passwordErrors = "password_errors_hidden";
        this.usernameTaken = "";
        this.usernameErrorMsg = "This appears on your profile.";
        this.passwordErrorMsg = "";
        this.passwordInput = "signup_session_input";
        this.usernameInput = "signup_session_input";
        this.emailInput = "signup_session_input";
        this.emailErrors = "email_errors_hidden";
        this.genderErrors = "gender_errors_hidden";
        

       
       
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();
      
        
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        
        this.usernameErrors = "username_errors_hidden";
        this.passwordErrors = "password_errors_hidden";
        this.emailErrors = "email_errors_hidden";
        this.genderErrors = "gender_errors_hidden";
        this.usernameTaken = "";
        this.usernameErrorMsg = "";
        this.passwordErrorMsg = "";
        this.emailErrorMsg = "";
        this.passwordInput = "signup_session_input";
        this.usernameInput = "signup_session_input";
        this.emailInput = "signup_session_input";
        this.genderErrors = "email_errors_hidden";
        this.genderInput = "signup_input_errors";
        this.genderErrorMsg = '';
       // }
    }

    update(parameter) {
        return e => this.setState({
            [parameter]: e.currentTarget.value
        });
    }

    // validate() {
       
    //     let errors = this.props.errors;
    //     let isValid = true;

    //     if (this.state.name.value === '') {
    //         isValid = false;
    //         errors.name = "Please enter your name.";
    //     }

    //     if (this.state.email.value === '') {
    //         isValid = false;
    //         errors.email = "Please enter your email Address.";
    //     }

    //     if (this.state.password.value == '') {
    //         isValid = false;
    //         errors.password = "Please enter your password.";
    //     }

    //     if (this.state.email2.value === '') {
    //         isValid = false;
    //         errors.email2 = "Please confirm your email.";
    //     }

    //     if (typeof this.state.email.value !== "undefined" && typeof this.state.email2.value !== "undefined") {

    //         if (this.state.email.value != this.state.email2.value) {
    //             isValid = false;
    //             errors.email = "Emails don't match.";
    //         }
    //     }


    //     return isValid;
    // }

    

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }



    render() {
        this.props.errors.forEach(error => {
            if (error.split(" ")[0] === "Username") {
                this.usernameErrors = "username_errors_displayed";
                this.usernameInput = "username_input_errors";
                this.usernameErrorMsg = error;
                if (error === "Username has already been taken") {
                    this.usernameTaken = <Link to="/login"
                        onClick={() => removeErrors()}>
                        . Log in?
                    </Link>;
                };
            } else if (error.split(" ")[0] === "Password") {
                this.passwordErrors = "password_errors_displayed";
                this.passwordInput = "password_input_errors";
                this.passwordErrorMsg = error;
            } else if (error.split(" ")[0] === "Email"){
                this.emailErrors = "email_errors_displayed";
                this.emailInput = "email_input_errors";
                this.emailErrorMsg = error;
            }
            else if (error.split(" ")[0] === "Gender") {
                this.genderErrors = "gender_errors_displayed";
                this.genderInput = "gender_input_errors";
                this.genderErrorMsg = error;
            };
            if (this.usernameErrors !== "username_errors_displayed") {
                this.usernameErrorMsg = "This appears on your profile."
            };
        });
        return (
        <div className="signup-form-div">
            <header>
               {this.props.homeLink};
            </header>
            <form onSubmit={this.handleSubmit} className="signup-form-container">
                <h2 className='signup-msg' id='signup-top-msg'>Sign up for free to start listening.</h2>
                <h4 className='signup-instruction-header' id='sign-up header'>Sign up with your email address</h4>
                <div >
                        <label className='sign-up-form-label'>What's your email? </label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            id="signup-input"
                            className = {this.emailInput}
                            placeholder='Enter your email.'
                        />
                        
                        <div className="signup_session_label" className={this.emailErrors} id="under_input">{this.emailErrorMsg}</div>
                    <br/>
                        {/* <label className='sign-up-form-label'>Confirm your email </label>
                            <input type="text"
                            value ={this.state.email2}
                            className="signup-input"
                            placeholder='Re-enter your email.'
                            onChange={this.update('email2')}
                            
                        />
        
                    <br /> */}
                    <label className='sign-up-form-label'>Password: </label>
              <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            id="signup-input"
                            className = {this.passwordInput}
                            placeholder='Create a password.'
                        />
                        <div className="signup_session_label" className={this.passwordErrors} id="under_input">{this.passwordErrorMsg}</div>
                    <br/>
                    <label className='sign-up-form-label'> What should we call you? </label>
              <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            id="signup-input"
                            className = {this.usernameInput}
                            placeholder = 'Enter a profile name.'
                        />
                        <div className="signup_session_label" className={this.usernameErrors} id="under_input">{this.usernameErrorMsg}{this.usernameTaken}</div>
                        
                    <br/>
                    
                    {/* <label className='sign-up-form-label'> What's your date of birth?</label>
                    <div className = 'date-entry-div'>
                    <div className = 'month-div'>
                    <label className='birthday-label'>Month</label>
                    <select id='month' className = 'select-month' name='Month' onChange={this.update('month')}> 
                            <option selected disabled value className = 'default-option'> Month </option>
                            <option value="01">January</option>
                            <option value="01">February</option>
                            <option value="01">March</option>
                            <option value="01">April</option>
                            <option value="01">May</option>
                            <option value="01">June</option>
                            <option value="01">July</option>
                            <option value="01">August</option>
                            <option value="01">September</option>
                            <option value="01">October</option>
                            <option value="01">November</option>
                            <option value="01">December</option>
                    </select>
                    </div>

                    <div className = 'day-div'>
                    <label className='birthday-label'>Day</label>
                    <input type = "text" 
                            id="day" 
                            className='month-input'
                            inputMode="numeric" 
                            maxLength="2" 
                            pattern="((0?[1-9])|([12][0-9])|(3[01]))" 
                            placeholder = 'DD'
                            onChange={this.update('day')}>
                                
                    </input>
                    </div>
                    <div className = 'year-div'>
                    <label className='birthday-label'>Year</label>
                    <input type="text"
                            id="year"
                            className= 'year-input'
                            inputMode="numeric"
                            maxLength="4"
                            pattern="((19[0-9]{2})|(200[0-9]))"
                            placeholder='YYYY'
                            onChange={this.update('year')}>
                    </input>
                    </div>
                    </div>
                    <br/> */}
                    
                    <label className='sign-up-form-label'>What's your gender?</label>
                    <div className = 'radio-div'>
                        <p className='radio-wrap'> <input type="radio" value='Male' className='gender' onChange={this.update('gender')} />Male </p>
                        <p className='radio-wrap'> <input type="radio" value='Female' className='gender' onChange={this.update('gender')} /> Female </p> 
                        <p className='radio-wrap'> <input type="radio" value='Non-binary' className='gender' onChange={this.update('gender')} />Non-binary</p> 
                    </div>
                    <div className="signup_session_label" className={this.genderErrors} id="under_input">{this.genderErrorMsg}</div>
                    <br/>
                    <br/>
                    <br/>
                    
                    <input id='session-button'className="session-submit" type="submit" value='SIGN UP' />
                    <br/>

                    <p className = 'login-link'>Have an account? {this.props.navLink} </p>
                </div>
            </form>
        </div>);
    }
}

export default SignupForm;


