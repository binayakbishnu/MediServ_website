import React, { Component } from "react";
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import uuid from "react-uuid";

import consultationFormStyles from './ConsultationForm.module.css'
const options = [
    {
        label: " -- select an option -- ",
        value: " -- select an option -- ",
        selected: true,
        hidden: true,
        disabled: true,
    },
    {
        label: "Sharma",
        value: "DOC423",
    },
    {
        label: "Sen",
        value: "DOC877",
    },
    {
        label: "Kumar",
        value: "DOC544",
    },
    {
        label: "Swami",
        value: "DOC987",
    },
];
export class ConsultationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            doctor: ' -- select an option -- ',
            problems: '',
            doctorError: '',
            problemsError: '',
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
    doctorValidation(doctor) {
        alert(`Selected doctor: ${doctor}`);
        if (doctor === ' -- select an option -- ' || doctor === '') {
            this.setState({ doctorError: 'Select a doctor'});
            return false;
        } else {
            return true;
        }
    }
    problemsValidation(problems) {
        if (problems === '') {
            this.setState({ problems: '' });
            this.setState({ problemsError: 'Type the problem(s)' });
            return false;
        } else {
            return true;
        }
    }
    handleSubmit(event) {
        alert(`Submitted: ${this.state.id}, ${this.state.id.length},\n${this.state.doctor},\n${this.state.problems}`);

        event.preventDefault();

        const { doctor, problems } = this.state
        const doctorValidation = this.doctorValidation(doctor);
        const problemsValidation = this.problemsValidation(problems);
        alert(`${doctorValidation}, ${problemsValidation}`);

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
            <div className={`${consultationFormStyles.formParent}`}>
                <Form action='/mainApp' method='POST' onSubmit={this.handleSubmit}>
                    <h3>Consultation Form</h3>
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
                        <Col className="" md="6">
                            <label>Doctor</label>
                            <Form.Select name="doctor" className="form-control"
                                value={this.state.doctor} onChange={this.handleChange}>
                                {/* <optgroup label="MBBS, MD">
                                    <option value="DOC423">Sharma</option>
                                    <option value="DOC877">Sen</option>
                                </optgroup>
                                <optgroup label="MBBS, MS">
                                    <option value="DOC544">Kumar</option>
                                    <option value="DOC987">Swami</option>
                                </optgroup> */}
                                {options.map((option) => (
                                    <option hidden={option.hidden} disabled={option.disabled} selected={option.selected} value={option.value}>{option.label}</option>
                                ))}
                            </Form.Select>
                            <span name="doctorError" className="">{this.state.doctorError}</span>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col>
                            <label>Problems</label>
                            <Form.Control as="textarea" aria-label="Problems"
                                name="problems"
                                className="form-control"
                                placeholder="Type here..."
                                value={this.state.problems} onChange={this.handleChange}
                                required
                            />
                            <span name="problemsError" className="">{this.state.problemsError}</span>
                        </Col>
                    </Row>
                    <div className="d-grid">
                        <Button type="submit" className="btn btn-primary">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default ConsultationForm