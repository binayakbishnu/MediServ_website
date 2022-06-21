import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

import loginStyles from './Login.module.css'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            email: '',
            password: '',
            /* rememberMe: true, */
            emailError: '',
            passwordError: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    }

    handleSubmit(event) {
    }

    render() {
        return (
            <div className={`${loginStyles.loginParent} auth-wrapper`}>
                <div className="auth-inner">
                    <form action='/mainApp' method='POST' onSubmit={this.handleSubmit}>
                        <h3>Login</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                // value={this.state.email} onChange={this.handleChange}
                                required
                            />
                            <span name="emailError" className="">{this.state.emailError}</span>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                // value={this.state.password} onChange={this.handleChange}
                                required
                            />
                            <span name="passwordError" className="">{this.state.passwordError}</span>
                        </div>
                        {/* <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    className="custom-control-input me-1"
                                    id="customCheck1"
                                    checked={this.state.rememberMe} onChange={this.handleChange}
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div> */}
                        <div className="d-grid mb-1">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                        <div className="forgot-password text-right d-flex justify-content-between">
                            <p><Link to='/forgotPassword'>Forgot password?</Link></p>
                            <p>New user? <Link to='/signUp'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
