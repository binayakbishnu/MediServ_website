import React, { Component } from "react";
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import uuid from "react-uuid";

import profilePageStyles from './ProfilePage.module.css'

export class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            currentFirstName: 'Binayak',
            currentLastName: 'Bishnu',
            currentEmail: 'bishnu.binayak12@gmail.com',
            currentPassword: 'qweewq123',
            oldFirstName: 'Binayak',
            oldLastName: 'Bishnu',
            oldEmail: 'bishnu.binayak12@gmail.com',
            oldPassword: 'qweewq123',
            confirmPassword: '',

            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
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
            this.setState({ currentEmail: '' });
            this.setState({ emailError: 'Enter email' });
            return false;
        } else if (email.match(regexEmail)) {
            // alert("Valid email address");
            this.setState({ emailError: '' });
            return true;
        } else {
            // alert("Invalid email address");
            this.setState({ currentEmail: '' });
            this.setState({ emailError: 'Invalid email' });
            return false;
        }
    }

    passwordValidation(password) {
        if (password === "" || password === null) {
            // alert("Enter password");
            this.setState({ currentPassword: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ passwordError: 'Enter password' });
            return false;
        } else if (password.length <= 5) {
            // alert("Password too short");
            this.setState({ currentPassword: '' });
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
            this.setState({ currentPassword: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ confirmPasswordError: 'Enter password' });
            return false;
        } else if (confirmPassword !== password) {
            this.setState({ currentPassword: '' });
            this.setState({ confirmPassword: '' });
            this.setState({ confirmPasswordError: "Passwords don't match" });
            return false;
        } else {
            this.setState({ confirmPasswordError: '' });
            return true;
        }
    }

    handleSubmit(event) {
        alert(event.target.name);
        alert(`Submitted: ${this.state.id}, ${this.state.id.length},\n${this.state.currentFirstName} ${this.state.currentLastName}, ${this.state.currentEmail}, ${this.state.currentPassword}, ${this.state.confirmPassword}`);

        event.preventDefault();
        const { currentFirstName, currentLastName, currentEmail, currentPassword, confirmPassword } = this.state

        const firstNameValidation = this.nameValidation('currentFirstName', currentFirstName);
        const lastNameValidation = this.nameValidation('currentLastName', currentLastName);
        const emailValidation = this.emailValidation(currentEmail);
        const passwordValidation = this.passwordValidation(currentPassword);
        const confirmPasswordValidation = this.confirmPasswordValidation(currentPassword, confirmPassword);
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

        return firstNameValidation && lastNameValidation && emailValidation && passwordValidation && confirmPasswordValidation;
    }

    editProfile(name) {
        this.setState({
            oldFirstName: this.state.currentFirstName,
            oldLastName: this.state.currentLastName,
            oldEmail: this.state.currentEmail,
            oldPassword: this.state.currentPassword,
        })

        alert(name + ' clicked');

        var purpose;
        if (name === "editProfile") {
            if (document.getElementById("saveChangesCol").style.visibility === "hidden") {
                purpose = "editing";
            } else {
                purpose = "cancelling"
            }
        } else if (name === "saveChanges") {
            purpose = "saving";
        }

        if (purpose === "saving") {
            // var formValidation = this.handleSubmit(document.getElementById('profileForm'));
            var formValidation = this.state.confirmPassword === '' || this.state.confirmPassword === null ? false : this.state.confirmPassword === this.state.currentPassword ? true : false;
            if (formValidation === true) {
                alert("Form is ok");
            } else {
                alert("Form is not ok");
                this.setState({ confirmPasswordError: "Invalid" })
                return false;
            }
        }

        document.getElementById('saveChangesCol').style.visibility =
            document.getElementById('saveChangesCol').style.visibility === 'visible' ? 'hidden' : 'visible';
        document.getElementById('editProfile').innerHTML =
            document.getElementById('editProfile').innerHTML === "Edit Profile" ? "Cancel" : "Edit Profile";
        document.getElementById('currentFirstName').disabled =
            document.getElementById('currentFirstName').disabled === true ? false : true;
        document.getElementById('currentLastName').disabled =
            document.getElementById('currentLastName').disabled === true ? false : true;
        document.getElementById('currentEmail').disabled =
            document.getElementById('currentEmail').disabled === true ? false : true;
        document.getElementById('currentPassword').disabled =
            document.getElementById('currentPassword').disabled === true ? false : true;
        document.getElementById('confirmPasswordRow').style.display =
            document.getElementById('confirmPasswordRow').style.display === 'none' ? 'block' : 'none';

        if (purpose === "cancelling") {
            alert("Cancelling")
            this.setState({
                currentFirstName: this.state.oldFirstName,
                currentLastName: this.state.oldLastName,
                currentEmail: this.state.oldEmail,
                currentPassword: this.state.oldPassword,
            })
        } else if (purpose === "saving") {
            alert("Saving");
            this.setState({
                oldFirstName: this.state.currentFirstName,
                oldLastName: this.state.currentLastName,
                oldEmail: this.state.currentEmail,
                oldPassword: this.state.currentPassword,
            })
        } else if (purpose === "editing") {
            alert("Editing")
        }

        alert(`Old: ${this.state.oldFirstName}, ${this.state.oldLastName}, ${this.state.oldEmail}, ${this.state.oldPassword}\nNew: ${this.state.currentFirstName}, ${this.state.currentLastName}, ${this.state.currentEmail}, ${this.state.currentPassword}`);
    }

    render() {
        return (
            <div className={`${profilePageStyles.profileParent}`}>
                <Form name="profileForm" action='/mainApp' method='POST' onSubmit={this.handleSubmit} id="profileForm">
                    <h3>Profile Page</h3>
                    <Row name="idButtonsRow" className="mb-5">
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
                            <Button type="button" className="btn btn-primary" onClick={e => this.editProfile(e.target.name)}
                                id="editProfile" name="editProfile">
                                Edit Profile
                            </Button>
                        </Col>
                        <Col md="2" className="" style={{ "visibility": "hidden" }} id="saveChangesCol">
                            <label style={{ "visibility": "hidden" }}>Save changes</label>
                            <Button type="button" className="btn btn-primary" onClick={e => this.editProfile(e.target.name)}
                                id="saveChanges" name="saveChanges">
                                Save changes
                            </Button>
                        </Col>
                    </Row>

                    <Row name="namesRow" className="mb-5">
                        <Col className="" md="6">
                            <label>First Name</label>
                            <Form.Control name="currentFirstName"
                                value={this.state.currentFirstName} onChange={this.handleChange}
                                className="form-control"
                                id="currentFirstName"
                                disabled
                            />
                            <span name="firstNameError" className="">{this.state.firstNameError}</span>
                        </Col>
                        <Col className="" md="6">
                            <label>Last Name</label>
                            <Form.Control name="currentLastName"
                                value={this.state.currentLastName} onChange={this.handleChange}
                                className="form-control"
                                id="currentLastName"
                                disabled
                            />
                            <span name="lastNameError" className="">{this.state.lastNameError}</span>
                        </Col>
                    </Row>

                    <Row name="emailPasswordRow" className="mb-0" id="emailPasswordRow">
                        <Col className="" md="6">
                            <label>Email</label>
                            <Form.Control name="currentEmail" type="email"
                                value={this.state.currentEmail} onChange={this.handleChange}
                                className="form-control"
                                id="currentEmail"
                                disabled
                            />
                            <span name="emailError" className="">{this.state.emailError}</span>
                        </Col>
                        <Col className="" md="6">
                            <Row>
                                <Col>
                                    <label>Password</label>
                                    <Form.Control name="currentPassword" type="password"
                                        value={this.state.currentPassword} onChange={this.handleChange}
                                        className="form-control"
                                        id="currentPassword"
                                        disabled
                                    />
                                    <span name="passwordError" className="">{this.state.passwordError}</span>
                                </Col>
                            </Row>
                            <Row name="confirmPasswordRow" id="confirmPasswordRow" className="mt-2" style={{ "display": "none" }}>
                                <Col>
                                    <label>Confirm Password<sup>*</sup></label>
                                    <Form.Control name="confirmPassword" type="password"
                                        value={this.state.confirmPassword} onChange={this.handleChange}
                                        className="form-control"
                                        id="confirmPassword"
                                    />
                                    <span name="confirmPasswordError" className="">{this.state.confirmPasswordError}</span>
                                </Col>
                            </Row>
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