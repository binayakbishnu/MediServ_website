import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { createHashHistory } from 'history'
import uuid from 'react-uuid'

import moreDetailsStyles from './MoreDetails.module.css'

function MoreDetails(props) {
    const [id, setId] = useState(uuid());
    const [oldId, setOldId] = useState(id);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        var value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }

        console.error([name], value);
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                console.error('Error in changes');
        }
    }

    const handleSubmit = () => { navigate('./mainApp'); }

    return (
        <div>
            {/* <p>props.location.state.id</p> */}
            <div className={`${moreDetailsStyles.moreDetailsParent} auth-wrapper`}>
                <div className="auth-inner">
                    <form action='/mainApp' method='POST' onSubmit={handleSubmit} id="signUpForm">
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>ID</label>
                            <input
                                type="password"
                                name="id"
                                className="form-control"
                                placeholder=""
                                value={id}
                                disabled
                            />
                        </div>
                        <div className="mb-3 d-flex">
                            <div className={`me-1`}>
                                <label>First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="First name"
                                    value={firstName} onChange={handleChange}
                                    required
                                />
                                <span name="firstNameError" className="">{firstNameError}</span>
                            </div>
                            <div className={`ms-1`}>
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={lastName} onChange={handleChange}
                                    required
                                />
                                <span name="lastNameError" className="">{lastNameError}</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={email} onChange={handleChange}
                                required
                            />
                            <span name="emailError" className="">{emailError}</span>
                        </div>
                        <div className='mb-3 d-flex'>
                            <div className="me-1">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={password} onChange={handleChange}
                                    required
                                />
                                <span name="passwordError" className="">{passwordError}</span>
                            </div>
                            <div className="ms-1">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Re-enter Password"
                                    value={confirmPassword} onChange={handleChange}
                                    required
                                />
                                <span name="confirmPasswordError" className="">{confirmPasswordError}</span>
                            </div>
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
        </div>
    )
}

export default MoreDetails