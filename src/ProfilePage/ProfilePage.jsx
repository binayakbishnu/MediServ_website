import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import uuid from 'react-uuid';

import profilePageStyles from './ProfilePage.module.css';

function ProfileNode() {
    const [returnedData, setReturnedData] = useState(['']);

    const [id] = useState(uuid());

    const [currentFirstName, setCurrentFirstName] = useState('John');
    const [currentLastName, setCurrentLastName] = useState('Doe');
    const [currentEmail, setCurrentEmail] = useState('john@example.com');
    const [currentPassword, setCurrentPassword] = useState('qweewq123');

    const [oldFirstName, setOldFirstName] = useState('John');
    const [oldLastName, setOldLastName] = useState('Doe');
    const [oldEmail, setOldEmail] = useState('john@example.com');
    const [oldPassword, setOldPassword] = useState('qweewq123');

    const [confirmPassword, setConfirmPassword] = useState(currentPassword);

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    // const [profile, setProfile] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleData = async (url) => {
        const newData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id_: id,
                firstName: currentFirstName,
                lastName: currentLastName,
                email: currentEmail,
                password: currentPassword,
            }),
        }).then(res => res.json());
        console.log(newData);
        // console.log(newData.result);
        setReturnedData(newData);
    }

    // handleData('/api');

    function firstNameValidation() {
        const regexName = /^[a-zA-Z]+$/;
        console.log(currentFirstName);
        if (currentFirstName === "" || currentFirstName === null) {
            setFirstNameError('Enter value');
            return false;
        } else if (/\d/.test(currentFirstName)) {
            setFirstNameError('No numbers allowed');
            return false;
        } else if (!currentFirstName.match(regexName)) {
            setFirstNameError('No special characters allowed');
            return false;
        } else {
            setFirstNameError('');
            return true;
        }
    }
    function lastNameValidation() {
        const regexName = /^[a-zA-Z]+$/;
        if (currentLastName === "" || currentLastName === null) {
            setLastNameError('Enter value');
            return false;
        } else if (/\d/.test(currentLastName)) {
            setLastNameError('No numbers allowed');
            return false;
        } else if (!currentLastName.match(regexName)) {
            setLastNameError('No special characters allowed');
            return false;
        } else {
            setLastNameError('');
            return true;
        }
    }

    function emailValidation() {
        // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (currentEmail === "" || currentEmail === null) {
            setCurrentEmail('');
            setEmailError('Enter email');
            return false;
        } else if (currentEmail.match(regexEmail)) {
            setEmailError('');
            return true;
        } else {
            setCurrentEmail('');
            setEmailError('Invalid email');
            return false;
        }
    }

    function passwordValidation() {
        if (currentPassword === "" || currentPassword === null) {
            setPasswordError('Enter password');
            return false;
        } else if (currentPassword.length <= 5) {
            setPasswordError('Too short');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    }

    function confirmPasswordValidation() {
        if (confirmPassword === "" || confirmPassword === null) {
            setConfirmPassword('');
            setConfirmPasswordError('Enter password');
            return false;
        } else if (confirmPassword !== currentPassword) {
            setConfirmPassword('');
            setConfirmPasswordError("Passwords don't match");
            return false;
        } else {
            setConfirmPasswordError('');
            return true;
        }
    }

    function editProfile(name) {
        setOldFirstName(currentFirstName);
        setOldLastName(currentLastName);
        setOldEmail(currentEmail);
        setOldPassword(currentPassword);

        alert(name + ' clicked');

        var purpose;
        if (name === "editProfile") {
            if (document.getElementById("saveChangesCol").style.visibility === "hidden") {
                purpose = "editing";
            } else {
                purpose = "cancelling";
            }
        } else if (name === "saveChanges") {
            purpose = "saving";
        }

        console.log('Purpose: ' + purpose);

        /* if (purpose === "saving") {
            var formValidation = confirmPassword === '' || confirmPassword === null ? false : confirmPassword === currentPassword ? true : false;
            if (formValidation === true) {
                alert("Form is ok");
                setConfirmPassword('');
            } else {
                alert("Form is not ok");
                setConfirmPassword('');
                setConfirmPasswordError('Invalid');
                return false;
            }
        } */

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
            alert("Cancelling");
            setCurrentFirstName(oldFirstName);
            setCurrentLastName(oldLastName);
            setCurrentEmail(oldEmail);
            setCurrentPassword(oldPassword);
            setConfirmPassword(currentPassword);
        } else if (purpose === "saving") {
            alert("Saving");
            setOldFirstName(currentFirstName);
            setOldLastName(currentLastName);
            setOldEmail(currentEmail);
            setOldPassword(currentPassword);
        } else if (purpose === "editing") {
            alert("Editing");
        }

        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        alert(`${purpose}->\nOld: ${oldFirstName}, ${oldLastName}, ${oldEmail}, ${oldPassword}\nNew: ${currentFirstName}, ${currentLastName}, ${currentEmail}, ${currentPassword}`);

        if (purpose === "saving") { handleData('/mainApp/insert'); }
    }

    function handleChange(event) {
        /* if (event.target.name === "age") {
            setProfile(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }))
            return;
        }
        setProfile(prevState => ({
            ...prevState,
            [event.target.name]: value
        })) */

        const name = event.target.name;
        var value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }

        switch (name) {
            case 'currentFirstName':
                setCurrentFirstName(value);
                break;
            case 'currentLastName':
                setCurrentLastName(value);
                break;
            case 'currentEmail':
                setCurrentEmail(value);
                break;
            case 'currentPassword':
                setCurrentPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                console.error('Error in changes');
        }

        console.warn(name);
        console.warn(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        alert(event.target.name);
        alert(`Submitted: ${id},\n${currentFirstName} ${currentLastName},\n${currentEmail}, ${currentPassword}, ${confirmPassword}`);

        const firstNameV = firstNameValidation();
        const lastNameV = lastNameValidation();
        const emailV = emailValidation();
        const passwordV = passwordValidation();
        const confirmPasswordV = confirmPasswordValidation();

        console.warn(`Validation: ${firstNameV}, ${lastNameV}\n${emailV}, ${passwordV}, ${confirmPasswordV}`);

        console.log(firstNameV && lastNameV && emailV && passwordV && confirmPasswordV);
        if (firstNameV && lastNameV && emailV && passwordV && confirmPasswordV) {
            editProfile('saveChanges');
        }
        return firstNameV && lastNameV && emailV && passwordV && confirmPasswordV;
    }

    return (
        <div className={`${profilePageStyles.profileParent}`}>
            <Form name="profileForm" action='' method='POST' onSubmit={e => handleSubmit(e)} id="profileForm">
                <h3>Profile Page</h3>
                <Row name="idButtonsRow" className="mb-5">
                    <Col className="" md="6">
                        <label>ID</label>
                        <Form.Control
                            type="password"
                            name="id"
                            className="form-control"
                            placeholder=""
                            value={id}
                            disabled
                        />
                    </Col>
                    <Col md="2" className="">
                        <label style={{ "visibility": "hidden" }}>Edit</label>
                        <Button type="button" className="btn btn-primary" onClick={e => editProfile(e.target.name)}
                            id="editProfile" name="editProfile">
                            Edit Profile
                        </Button>
                    </Col>
                    <Col md="2" className="" style={{ "visibility": "hidden" }} id="saveChangesCol">
                        <label style={{ "visibility": "hidden" }}>Save</label>
                        <Button type="submit" className="btn btn-primary" /* onClick={e => editProfile(e.target.name)} */
                            id="saveChanges" name="saveChanges">
                            Save changes
                        </Button>
                    </Col>
                </Row>

                <Row name="namesRow" className="mb-5">
                    <Col className="" md="6">
                        <label>First Name</label>
                        <Form.Control name="currentFirstName"
                            value={currentFirstName} onChange={e => handleChange(e)}
                            className="form-control"
                            id="currentFirstName"
                            disabled
                        />
                        <span name="firstNameError" className={`${profilePageStyles.errorMessages}`}>{firstNameError}</span>
                    </Col>
                    <Col className="" md="6">
                        <label>Last Name</label>
                        <Form.Control name="currentLastName"
                            value={currentLastName} onChange={e => handleChange(e)}
                            className="form-control"
                            id="currentLastName"
                            disabled
                        />
                        <span name="lastNameError" className={`${profilePageStyles.errorMessages}`}>{lastNameError}</span>
                    </Col>
                </Row>

                <Row name="emailPasswordRow" className="mb-0" id="emailPasswordRow">
                    <Col className="" md="6">
                        <label>Email</label>
                        <Form.Control name="currentEmail" type="email"
                            value={currentEmail} onChange={e => handleChange(e)}
                            className="form-control"
                            id="currentEmail"
                            disabled
                        />
                        <span name="emailError" className={`${profilePageStyles.errorMessages}`}>{emailError}</span>
                    </Col>
                    <Col className="" md="6">
                        <Row>
                            <Col>
                                <label>Password</label>
                                <Form.Control name="currentPassword" type="password"
                                    value={currentPassword} onChange={e => handleChange(e)}
                                    className="form-control"
                                    id="currentPassword"
                                    disabled
                                />
                                <span name="passwordError" className={`${profilePageStyles.errorMessages}`}>{passwordError}</span>
                            </Col>
                        </Row>
                        <Row name="confirmPasswordRow" id="confirmPasswordRow" className="mt-2" style={{ "display": "none" }}>
                            <Col>
                                <label>Confirm Password<sup>*</sup></label>
                                <Form.Control name="confirmPassword" type="password"
                                    value={confirmPassword} onChange={e => handleChange(e)}
                                    className="form-control"
                                    id="confirmPassword"
                                />
                                <span name="confirmPasswordError" className={`${profilePageStyles.errorMessages}`}>{confirmPasswordError}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Button type="button" onClick={() => handleData('/mainApp/insert')}>Get Data</Button>
                    <div>{returnedData}</div>
                </Row>
            </Form>
        </div>
    )
}

export default ProfileNode