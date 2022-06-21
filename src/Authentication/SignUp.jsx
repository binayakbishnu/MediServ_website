import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

import signUpStyles from './SignUp.module.css'

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        var value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }

        this.setState({
            [name]: value
        });
    }

    nameValidation(nameType, name) {
        const errorName = nameType + 'Error';
        const regexName = /^[a-zA-Z]+$/
        if (name === "" || name === null) {
            this.setState({ [errorName]: 'Enter value' });
            return false;
        } else if (/\d/.test(name)) {
            this.setState({ [errorName]: 'No numbers allowed' });
            return false;
        } else if (!name.match(regexName)) {
            this.setState({ [errorName]: 'No special character allowed' });
            return false;
        } else {
            this.setState({ [errorName]: '' });
            return true;
        }
    }

    emailValidation(email) {
        // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === "" || email === null) {
            // alert("Enter email");
            this.setState({ email: '' });
            this.setState({ emailError: 'Enter email' });
            return false;
        } else if (email.match(regexEmail)) {
            // alert("Valid email address");
            this.setState({ emailError: '' });
            return true;
        } else {
            // alert("Invalid email address");
            this.setState({ email: '' });
            this.setState({ emailError: 'Invalid email' });
            return false;
        }
    }

    passwordValidation(password) {
        if (password === "" || password === null) {
            // alert("Enter password");
            this.setState({ password: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ passwordError: 'Enter password' });
            return false;
        } else if (password.length <= 5) {
            // alert("Password too short");
            this.setState({ password: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ passwordError: 'Password too short' });
            return false;
        } else {
            // alert("Password ok");
            this.setState({ passwordError: '' });
            return true;
        }
    }

    confirmPasswordValidation(password, confirmPassword) {
        if (confirmPassword === "" || confirmPassword === null) {
            this.setState({ password: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ confirmPasswordError: 'Enter password' });
            return false;
        } else if (confirmPassword !== password) {
            this.setState({ password: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ confirmPasswordError: "Passwords don't match" });
            return false;
        } else {
            this.setState({ confirmPasswordError: '' });
            return true;
        }
    }

    handleSubmit(event) {
        alert(`Submitted: ${this.state.id}, ${this.state.id.length},\n${this.state.firstName} ${this.state.lastName}, ${this.state.email}, ${this.state.password}, ${this.state.confirmPassword}`);

        event.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = this.state

        const firstNameValidation = this.nameValidation('firstName', firstName);
        const lastNameValidation = this.nameValidation('lastName', lastName);
        const emailValidation = this.emailValidation(email);
        const passwordValidation = this.passwordValidation(password);
        const confirmPasswordValidation = this.confirmPasswordValidation(password, confirmPassword);
        alert(`${firstNameValidation}, ${lastNameValidation}\n${emailValidation}, ${passwordValidation}, ${confirmPasswordValidation}`);

        // const url = '/mainApp'
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // };
        // fetch(url, requestOptions)
        //     .then(response => console.log('Submitted successfully'))
        //     .catch(error => console.log('Form submit error', error))

        this.setState({
            id: uuid(),
        })
    }

    render() {
        return (
            <div className={`${signUpStyles.signUpParent} auth-wrapper`}>
                <div className="auth-inner">
                    <form action='/mainApp' method='POST' onSubmit={this.handleSubmit}>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>ID</label>
                            <input
                                type="password"
                                name="id"
                                className="form-control"
                                placeholder=""
                                value={this.state.id}
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
                                    value={this.state.firstName} onChange={this.handleChange}
                                    required
                                />
                                <span name="firstNameError" className="">{this.state.firstNameError}</span>
                            </div>
                            <div className={`ms-1`}>
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={this.state.lastName} onChange={this.handleChange}
                                    required
                                />
                                <span name="lastNameError" className="">{this.state.lastNameError}</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={this.state.email} onChange={this.handleChange}
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
                                value={this.state.password} onChange={this.handleChange}
                                required
                            />
                            <span name="passwordError" className="">{this.state.passwordError}</span>
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Re-enter Password"
                                value={this.state.confirmPassword} onChange={this.handleChange}
                                required
                            />
                            <span name="confirmPasswordError" className="">{this.state.confirmPasswordError}</span>
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
}

export default SignUp
