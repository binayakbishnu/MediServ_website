import React from 'react'
import { Link } from 'react-router-dom'

import loginStyles from './Login.module.css'

export default function Login() {
    return (
        <div className={`${loginStyles.loginParent} auth-wrapper`}>
            <div className="auth-inner">
            <form action='/mainApp' method='get'>
                <h3>Login</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input me-1"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid mb-1">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
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
