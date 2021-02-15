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
        return (
        <div className="signup-form-div">
            <header>
                <div className ='logo_div'>
                       
                </div>
            </header>
            <form onSubmit={this.handleSubmit} className="signup-form-container">
                <h2 className='signup-msg' id='signup-top-msg'>Sign up for free to start listening.</h2>
                {this.renderErrors()}
                <h4 className='signup-instruction-header' id='sign-up header'>Sign up with your email address</h4>
                <div >
                        <label className='sign-up-form-label'>What's your email? </label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                            placeholder='Enter your email.'
                        />
                   
                    <br/>
                        <label className='sign-up-form-label'>Confirm your email </label>
                            <input type="text"
                            value ={this.state.email2}
                            className="signup-input"
                            placeholder='Re-enter your email.'
                            onChange={this.update('email2')}
                            
                        />
        
                    <br />
                    <label className='sign-up-form-label'>Password: </label>
              <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                            placeholder='Create a password.'
                        />
                    <br/>
                    <label className='sign-up-form-label'> What should we call you? </label>
              <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="signup-input"
                            placeholder = 'Enter a profile name.'
                        />
                  
                        <div className='profile-content'>This appears on your profile</div> 
                    <br/>
                    
                    <label className='sign-up-form-label'> What's your date of birth?</label>
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
                    <br/>
                    
                    <label className='sign-up-form-label'>What's your gender?</label>
                    <input type="radio" value='Male' className='gender' onChange={this.update('gender')}/>Male 
                    <input type="radio" value='Female' className='gender' onChange={this.update('gender')}/>Female 
                    <input type="radio" value='Non-binary' className='gender' onChange={this.update('gender')}/>Non-binary

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


