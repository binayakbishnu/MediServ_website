import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'

import signUpStyles from './SignUp.module.css'

function SignUp(props) {
    const [id, setId] = useState(uuid());
    const [oldId, setOldId] = useState(id);
    const [firstName, setFirstName] = useState('Binayak');
    const [lastName, setLastName] = useState('Bishnu');
    const [email, setEmail] = useState('bishnu.binayak12@gmail.com');
    const [password, setPassword] = useState('Password');
    const [confirmPassword, setConfirmPassword] = useState('Password');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    const handleData = async (url='/signUp') => {
        const newData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id_: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
        }).then(res => res.json());

        console.log('newData-', newData);
        return newData;
    }

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

    const firstNameValidation = () => {
        const regexName = /^[a-zA-Z]+$/;
        console.log(firstName);
        if (firstName === "" || firstName === null) {
            setFirstNameError('Enter value');
            return false;
        } else if (/\d/.test(firstName)) {
            setFirstNameError('No numbers allowed');
            return false;
        } else if (!firstName.match(regexName)) {
            setFirstNameError('No special characters allowed');
            return false;
        } else {
            setFirstNameError('');
            return true;
        }
    }
    const lastNameValidation = () => {
        const regexName = /^[a-zA-Z]+$/;
        if (lastName === "" || lastName === null) {
            setLastNameError('Enter value');
            return false;
        } else if (/\d/.test(lastName)) {
            setLastNameError('No numbers allowed');
            return false;
        } else if (!lastName.match(regexName)) {
            setLastNameError('No special characters allowed');
            return false;
        } else {
            setLastNameError('');
            return true;
        }
    }

    const emailValidation = () => {
        // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (email === "" || email === null) {
            setEmail('');
            setEmailError('Enter email');
            return false;
        } else if (email.match(regexEmail)) {
            setEmailError('');
            return true;
        } else {
            setEmail('');
            setEmailError('Invalid email');
            return false;
        }
    }

    const passwordValidation = () => {
        if (password === "" || password === null) {
            setPasswordError('Enter password');
            return false;
        } else if (password.length <= 5) {
            setPasswordError('Too short');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    }

    const confirmPasswordValidation = () => {
        if (confirmPassword === "" || confirmPassword === null) {
            setConfirmPassword('');
            setConfirmPasswordError('Enter password');
            return false;
        } else if (confirmPassword !== password) {
            setConfirmPassword('');
            setConfirmPasswordError("Passwords don't match");
            return false;
        } else {
            setConfirmPasswordError('');
            return true;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const firstNameV = firstNameValidation();
        const lastNameV = lastNameValidation();
        const emailV = emailValidation();
        const passwordV = passwordValidation();
        const confirmPasswordV = confirmPasswordValidation();
        console.log(`${firstNameV}, ${lastNameV}\n${emailV}, ${passwordV}, ${confirmPasswordV}`);
        console.warn('All validations:', firstNameV && lastNameV && emailV && passwordV && confirmPasswordV);

        var handleDataOutput;
        if (firstNameV && lastNameV && emailV && passwordV && confirmPasswordV) {
            handleDataOutput = await handleData();
            const SQLV = handleDataOutput.errorPresent === false ? true : false;  //! if error is false in handleDataOutput, then no error present in SQL process
            if (handleDataOutput.errorPresent===true)   setEmailError(handleDataOutput.errorMessage);
            console.warn('With SQLV: ', firstNameV && lastNameV && emailV && passwordV && confirmPasswordV && SQLV);
            
            if (firstNameV && lastNameV && emailV && passwordV && confirmPasswordV && SQLV) {
                alert(`Submitting: ${id}, ${id.length},\n${firstName} ${lastName}, ${email}, ${password}, ${confirmPassword}`);
                setOldId(id);
                setId(uuid());
                navigate('/moreDetails', { state: { id: oldId } });
            }
        }
    }

    return (
        <div className={`${signUpStyles.signUpParent} auth-wrapper`}>
            <div className="auth-inner">
                <form action='/mainApp' method='POST' onSubmit={handleSubmit} id="signUpForm">
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            // type="password"
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
    )
}

export default SignUp
