import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/index';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    loginHandler = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push("/protected"));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.loginHandler}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    };
}

export default connect(
    null,
    { login }
)(Login);