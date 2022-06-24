import React, { Component } from "react";
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import uuid from "react-uuid";

import profilePageStyles from './ProfilePage.module.css'

export class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            firstName: 'Binayak',
            lastName: 'Bishnu',
            email: 'bishnu.binayak12@gmail.com',
            password: 'qweewq123',
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

    editProfile() {
        document.getElementById('saveChangesCol').style.visibility =
            document.getElementById('saveChangesCol').style.visibility === 'visible' ? 'hidden' : 'visible';
        document.getElementById('editProfile').innerHTML =
            document.getElementById('editProfile').innerHTML == "Edit Profile" ? "Cancel" : "Edit Profile";

        document.getElementById('firstName').disabled =
            document.getElementById('firstName').disabled === true ? false : true;
        document.getElementById('lastName').disabled =
            document.getElementById('lastName').disabled === true ? false : true;
        document.getElementById('email').disabled =
            document.getElementById('email').disabled === true ? false : true;
        document.getElementById('password').disabled =
            document.getElementById('password').disabled === true ? false : true;
    }

    render() {
        return (
            <div className={`${profilePageStyles.profileParent}`}>
                <Form action='/mainApp' method='POST' onSubmit={this.handleSubmit} id="form">
                    <h3>Profile Page</h3>
                    <Row className="mb-5">
                        <Col className="" md="6">
                            <label>ID</label>
                            <Form.Control
                                type="password"
                                name="id"
                                className="form-control"
                                placeholder=""
                                value={this.state.id}
                                disabled
                            />
                        </Col>
                        <Col md="2" className="">
                            <label style={{ "visibility": "hidden" }}>Edit Profile</label>
                            <Button type="button" className="btn btn-primary" onClick={this.editProfile}
                                id="editProfile">
                                Edit Profile
                            </Button>
                        </Col>
                        <Col md="2" className="" style={{ "visibility": "hidden" }} id="saveChangesCol">
                            <label style={{ "visibility": "hidden" }}>Save changes</label>
                            <Button type="button" className="btn btn-primary" onClick={this.editProfile}>
                                Save changes
                            </Button>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col className="" md="6">
                            <label>First Name</label>
                            <Form.Control value={this.state.firstName}
                                className="form-control"
                                id="firstName"
                                disabled
                            />
                            <span name="firstNameError" className="">{this.state.doctorError}</span>
                        </Col>
                        <Col className="" md="6">
                            <label>Last Name</label>
                            <Form.Control value={this.state.lastName}
                                className="form-control"
                                id="lastName"
                                disabled
                            />
                            <span name="lastNameError" className="">{this.state.doctorError}</span>
                        </Col>
                    </Row>

                    <Row className="mb-0">
                        <Col className="" md="6">
                            <label>Email</label>
                            <Form.Control value={this.state.email}
                                className="form-control"
                                id="email"
                                disabled
                            />
                            <span name="emailError" className="">{this.state.doctorError}</span>
                        </Col>
                        <Col className="" md="6">
                            <label>Password</label>
                            <Form.Control type="password" value={this.state.password}
                                className="form-control"
                                id="password"
                                disabled
                            />
                            <span name="passwordError" className="">{this.state.doctorError}</span>
                        </Col>
                    </Row>

                    {/* <div className="d-grid">
                        <Button type="submit" className="btn btn-primary">
                            Submit
                        </Button>
                    </div> */}
                </Form>
            </div>
        )
    }
}

export default ProfilePage