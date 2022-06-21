import React from 'react'
import { Link } from 'react-router-dom'

import signUpStyles from './SignUp.module.css'

export default function SignUp() {
    return (
        <div className={`${signUpStyles.signUpParent} auth-wrapper`}>
            <div className="auth-inner">
                <form action='/mainApp' method='get'>
                    <h3>Sign Up</h3>
                    <div className="mb-3 d-flex">
                        <div className={`me-1`}>
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                            />
                        </div>
                        <div className={`ms-1`}>
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
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
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Re-enter password"
                        />
                    </div>
                    <div className="d-grid mb-1">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <div className="forgot-password text-right">
                        Already registered? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
