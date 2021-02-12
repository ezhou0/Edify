import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '', 
            email2: '',
            month: '',
            day: '',
            year: '',
            birthday: '',
            confirmationError: ''
        };

       
       
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    verification() {
        const confirmationError2= 'Emails dont match';
        if(this.state.email !== this.state.email2){
            //his.state.confirmationError = 'Emails do not match';
            let error = Object.assign({confirmationError2}, this.props.errors);
            return false;
        }
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        //const isValid = this.verification();
        this.getBirthDate();
        const user = Object.assign({}, this.state);
        
        this.props.processForm(user);
        
    }

    update(parameter) {
        return e => this.setState({
            [parameter]: e.currentTarget.value
        });
    }

    getBirthDate(){
        this.state.birthday = new Date(this.state.year, this.state.month, this.state.day);
    }

    

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
        return (<div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <h1>Sign up for free to start listening.</h1>
                {this.renderErrors()}
                <div className="login-form">
                    <label>What's your email?
              <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder='Enter your email.'
                        />
                    </label>
                    <br/>
                    <label>Confirm your email
                            <input type="text"
                            value ={this.state.email2}
                            className="login-input"
                            placeholder='Re-enter your email.'
                            onChange={this.update('email2')}
                            
                        />
                    </label>
                    <br/>
                    {this.state.confirmationError}
                    <br />
                    <label>Password:
              <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder='Create a password.'
                        />
                    </label>
                    <br/>
                    <label> What should we call you?
              <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                            placeholder = 'Enter a profile name.'
                        />
                    </label>
                    <br />

                    <h3>What's your date of birth?</h3>
                    <label>Month</label>
                    <select id='month' name='Month' onChange={this.update('month')}> 
                        <option value="DEFAULT" disabled> Month </option>
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
                    <label>Day</label>
                    <input type = "text" 
                            id="day" 
                            inputMode="numeric" 
                            maxLength="2" 
                            pattern="((0?[1-9])|([12][0-9])|(3[01]))" 
                            placeholder = 'DD'
                            onChange={this.update('day')}>
                                
                    </input>
                    <label>Year</label>
                    <input type="text"
                        id="year"
                        inputMode="numeric"
                        maxLength="4"
                        pattern="((19[0-9]{2})|(200[0-9]))"
                        placeholder='YYYY'
                        onChange={this.update('year')}>
                    </input>

                    <br/>
                    <div></div>
                    <label>What's your gender?</label>
                    <input type="radio" value='Male' name='gender' onChange={this.update('gender')}/>Male 
                   <input type="radio" value='Female' name='gender' onChange={this.update('gender')}/>Female 
                   <input type="radio" value='Non-binary' name='gender' onChange={this.update('gender')}/>Non-binary

                    <br/>

                    <input type='checkbox' /> 
                    <span>Share my registration data with Edify's content providers for marketing purposes</span>
                    <br/>
                    <input type = 'checkbox'/> <span>I'm not a robot</span>

                    <div className='ToS'>
                    <p>By clicking on Signup, you agree to Edify's Terms and Conditions of Use.</p>
                    <p>To learn more about how Edify collects, uses, shares and protects your personal data please read Edify's Privacy Policy.</p>
                    </div>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    <br/>

                    <p>Have an account? {this.props.navLink} </p>
                </div>
            </form>
        </div>);
    }
}

export default SignupForm;


