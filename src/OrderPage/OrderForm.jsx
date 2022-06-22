import React, { Component } from "react";
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import uuid from "react-uuid";

import orderFormStyles from './OrderForm.module.css'
const optGroups = [
    {
        name: null,
        optGroup: [{
            label: " -- select an option -- ",
            value: " -- select an option -- ",
            selected: true,
            hidden: true,
            disabled: true,
        },]
    },
    {
        name: "Liquid",
        optGroup: [
            {
                label: "Lorem",
                value: "MED123",
            },
            {
                label: "Ipsum",
                value: "MED312",
            },
        ]
    },
    {
        name: "Tablet",
        optGroup: [
            {
                label: "Dolor",
                value: "MED890",
            },
            {
                label: "Sit",
                value: "MED809",
            },
        ]
    },
    {
        name: "Capsule",
        optGroup: [
            {
                label: "Emet",
                value: "MED456",
            },
            {
                label: "Elir",
                value: "MED465",
            },
        ]
    },
];

export class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            medicine: ' -- select an option -- ',
            quantity: 0,
            medicineError: '',
            quantityError: '',
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
    medicineValidation(medicine) {
        alert(`Selected medicine: ${medicine}`);
        if (medicine === ' -- select an option -- ' || medicine === '') {
            this.setState({ medicineError: 'Select a medicine' });
            return false;
        } else {
            this.setState({ medicineError: '' });
            return true;
        }
    }
    quantityValidation(quantity) {
        alert(`Selected quantity: ${quantity}, ${typeof(quantity)}`);
        if (quantity === 0 || quantity === "0") {
            this.setState({ quantity: 0 });
            this.setState({ quantityError: 'Quantity must be greater than zero' });
            return false;
        } else {
            this.setState({ quantityError: '' });
            return true;
        }
    }
    handleSubmit(event) {
        alert(`Submitted: ${this.state.id}, ${this.state.id.length},\n${this.state.medicine},\n${this.state.quantity}`);

        event.preventDefault();

        const { medicine, quantity } = this.state
        const medicineValidation = this.medicineValidation(medicine);
        const quantityValidation = this.quantityValidation(quantity);
        alert(`${medicineValidation}, ${quantityValidation}`);

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
            <div className={`${orderFormStyles.formParent}`}>
                <Form action='/mainApp' method='POST' onSubmit={this.handleSubmit}>
                    <h3>Order Form</h3>
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
                            <label>Medicine</label>
                            <Form.Select name="medicine" className="form-control"
                                value={this.state.medicine} onChange={this.handleChange}>
                                {optGroups.map((optgroup) => (
                                    <optgroup label={optgroup.name}>
                                        {optgroup.optGroup.map((option) => (
                                            <option hidden={option.hidden} disabled={option.disabled} selected={option.selected} value={option.value}>{option.label}</option>
                                        ))}
                                    </optgroup>
                                ))}
                            </Form.Select>
                            <span name="medicineError" className="">{this.state.medicineError}</span>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md="6" className="m-auto">
                            <label>Quantity</label>
                            <Form.Control type="number" aria-label="Quantity"
                                name="quantity"
                                className="form-control"
                                value={this.state.quantity} onChange={this.handleChange}
                                required
                            />
                            <span name="quantityError" className="">{this.state.quantityError}</span>
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

export default OrderForm