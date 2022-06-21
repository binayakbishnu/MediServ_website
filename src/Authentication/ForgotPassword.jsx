import React from 'react'
import { Link } from 'react-router-dom'

import forgotPasswordStyles from './ForgotPassword.module.css'

export default function ForgotPassword() {
    return (
        <div className={`${forgotPasswordStyles.forgotPasswordParent} auth-wrapper`}>
            <div className="auth-inner">
            <form action='/mainApp' method='get'>
                <h3>Forgot Password</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label> New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <label> Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Re-enter password"
                    />
                </div>
                <div className="d-grid mb-1">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <div className="forgot-password text-right d-flex justify-content-between">
                    <p><Link to='/login'>Cancel</Link></p>
                </div>
            </form>
            </div>
        </div>
    )
}
