import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
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
        return (<div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
                Welcome to Edify!
          <br />
          Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <div className="login-form">
                    <br />
                    <label>Username:
              <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                        />
                    </label>
                    <br />
                    <label>Email:
              <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>
                    <br />
                    <label>Password:
              <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>
                    <br />
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </div>
            </form>
        </div>);
    }
}

export default SignupForm;


