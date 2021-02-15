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
        
             return (
             
             
             <div className="login-form-container">
                 <header className = 'login-header'>
                         <h1>Logo Goes Here</h1>
                 </header>
                 <div className = 'login-welcome'> To contine, log in to Edify.</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                {this.renderErrors()}
                <div className="login-form">
                    <br />
                    <label className = 'login-label'>Username:</label>
                             <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                            placeholder= 'Username'
                        />
                    <br />
                    <label className = 'login-label'>Password:</label>
                            <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder='Password'
                        />
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