import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.clearErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
       
    }

    update(parameter) {
        return e => this.setState({
            [parameter]: e.currentTarget.value
        });
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
        
        let inputClass = "session_input"
        if (this.props.errors.length) {
            inputClass = "session_input_errors"
        }
        
             return (
             
             
             <div className="login-form-container">
                     <header>
                        {this.props.homeLink}    
                     </header>
                 <div className = 'login-welcome'> To contine, log in to Edify.</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="login-form">
                    <br />
                    <label className = 'login-label'>Username:</label>
                             <input type="text"
                             id='login-input'
                            value={this.state.username}
                            onChange={this.update('username')}
                            className={inputClass}
                            placeholder= 'Username'
                            // onClick={() => usernameInputClass = "session_input"}
                             />
                    <br />
                    <label className = 'login-label'>Password:</label>
                            <input type="password"
                            id = 'login-input'
                            value={this.state.password}
                            onChange={this.update('password')}
                            className={inputClass}
                            placeholder='Password'
                            // onClick={() => passwordInputClass = "session_input_errors"}
                        />
                    {/* <div className = 'login-error'>{this.renderErrors()}</div> */}
                    <br />
                    <input className="session-submit" type="submit" value='LOG IN' />
                    <div className='sign-up-msg'>Don't have an account?</div>
                     <div className='sign-up-button'>{this.props.navLink}</div>
                </div>
                </form>
                   
                   
            
        </div>);

    }
}

export default LoginForm;