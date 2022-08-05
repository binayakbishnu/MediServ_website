import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import DOB from './DOB.json'
import statewiseCities from './statewiseCities.json'

import moreDetailsStyles from './MoreDetails.module.css'

function MoreDetails(props) {
    const location = useLocation();
    const id = useState(location.state.id);
    const [DOBDate, setDOBDate] = useState(11);
    const [DOBMonth, setDOBMonth] = useState('September');
    const [DOBYear, setDOBYear] = useState(2002);
    const [leapYear, setLeapYear] = useState(false);
    const [phoneNo, setphoneNo] = useState(1234567890);
    const [street, setStreet] = useState('VIT Road');
    const [city, setCity] = useState('Katpadi');
    const [state, setState] = useState('Tamil Nadu');

    DOB.leapOrNot = leapYear === true ? true : false;
    DOB.months.February.days = leapYear === true ? 29 : 28;

    const [DOBDateError, setDOBDateError] = useState('');
    const [DOBMonthError, setDOBMonthError] = useState('');
    const [DOBYearError, setDOBYearError] = useState('');
    const [phoneNoError, setPhoneNoError] = useState('');
    const [streetError, setStreetError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');

    const navigate = useNavigate();

    const handleData = async (url = '/moreDetails') => {
        const newData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id_: id,
                year: DOBYear,
                month: DOBMonth,
                date: DOBDate,
                phoneNo: phoneNo,
                state: state,
                city: city,
                street: street,
            }),
        }).then(res => res.json());

        console.log('newData-', newData);
        return newData;
    }

    const checkLeapYear = (year) => {
        const leap = new Date(year, 1, 29).getDate() === 29;
        if (leap) {
            console.log(year + ' is a leap year');
            DOB.leapOrNot = true;
            DOB.months.February.days = 29;
            setLeapYear(true);
        } else {
            console.log(year + ' is not a leap year');
            DOB.leapOrNot = false;
            DOB.months.February.days = 28;
            setLeapYear(false);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        var value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }

        console.warn(name, value);
        switch (name) {
            case 'DOBDate':
                setDOBDate(value);
                setDOBDateError('');
                break;
            case 'DOBMonth':
                var value2 = value.split(' ')[0];
                console.log(value2);
                value = value2.trim();
                setDOBMonth(value);
                setDOBMonthError('');
                break;
            case 'DOBYear':
                setDOBYear(value);
                checkLeapYear(value);
                setDOBYearError('');
                break;
            case 'phoneNo':
                setphoneNo(value);
                setPhoneNoError('');
                break;
            case 'street':
                setStreet(value);
                setStreetError('');
                break;
            case 'city':
                setCity(value);
                setCityError('');
                break;
            case 'state':
                setState(value);
                setStateError('');
                break;
            default:
                console.error('Error in handleChange switch-case');
        }
        console.warn(name, value);
    }

    const dateValidation = () => {
        var flag = true;
        if (DOBYear <= 999) {
            setDOBYearError('Check year');
            flag = false;
        }

        if (DOBMonth === '') {
            setDOBMonthError('Select month');
            flag = false;
        }
        else if (DOBMonth !== 'January' && DOBMonth !== 'February' && DOBMonth !== 'March' && DOBMonth !== 'April' && DOBMonth !== 'May' && DOBMonth !== 'June' && DOBMonth !== 'July' && DOBMonth !== 'August' && DOBMonth !== "September" && DOBMonth !== 'October' && DOBMonth !== 'November' && DOBMonth !== 'December') {
            setDOBMonthError('Check month');
            flag = false;
        }

        if (DOBDate <= 0) {
            setDOBDateError('Date always more that 0');
            flag = false;
        }
        if (DOBDate > DOB.months[DOBMonth]?.days) {
            setDOBDateError('Date exceeds');
            flag = false;
        }
        if (leapYear === false && DOBMonth === 'February' && DOBDate > 28) {
            setDOBDateError('Date exceeds');
            flag = false;
        }
        if (leapYear === true && DOBMonth === 'February' && DOBDate > 29) {
            setDOBDateError('Date exceeds');
            flag = false;
        }

        return flag;
    }

    const phoneNoValidation = () => {
        var phoneString = phoneNo;
        phoneString = phoneString.toString();
        console.log(typeof(phoneString))
        if (phoneString === '') {
            setPhoneNoError('Enter phone no');
            return false;
        } else if (!phoneString.match(/^\d{10}$/)) {
            setPhoneNoError('Only 10 digits');
            return false;
        } else {
            return true;
        }
    }

    const stateValidation = () => {
        if (state === '') {
            setStateError('Enter state');
            return false;
        } else {
            return true;
        }
    }
    const cityValidation = () => {
        if (city === '') {
            setCityError('Enter city');
            return false;
        } else {
            return true;
        }
    }
    const streetValidation = () => {
        if (street === '') {
            setStreetError('Enter street');
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dateV = dateValidation();
        const phoneNoV = phoneNoValidation();
        const stateV = stateValidation();
        const cityV = cityValidation();
        const streetV = streetValidation();
        console.log(dateV, phoneNoV, stateV, cityV, streetV);
        console.warn(dateV && phoneNoV && stateV && cityV && streetV);

        var handleDataOutput;
        if (dateV && phoneNoV && stateV && cityV && streetV) {
            handleDataOutput = await handleData();
            const SQLV = handleDataOutput.errorPresent === false ? true : false;  //! if error is false in handleDataOutput, then no error present in SQL process
            console.warn('With SQLV: ', dateV && phoneNoV && stateV && cityV && streetV && SQLV);
    
            if (dateV && phoneNoV && stateV && cityV && streetV && SQLV) {
                alert(`Submitting...\n${id}\n${DOBDate} ${DOBMonth} ${DOBYear}\n${phoneNo}\n${street} ${city} ${state}`)
                navigate('/mainApp');
            }
        }
    }

    return (
        <div className={`${moreDetailsStyles.moreDetailsParent} auth-wrapper`}>
            <div className="auth-inner">
                <form action='/mainApp' method='POST' onSubmit={handleSubmit} id="signUpForm">
                    <h3>More Details</h3>
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
                    <div className="mb-3 d-flex justify-content-between">
                        <div className={`me-1`}>
                            <label>Year</label>
                            <input
                                type="number"
                                name="DOBYear"
                                className="form-control"
                                placeholder="Enter year"
                                value={DOBYear} onChange={handleChange}
                            // required
                            />
                            <span name="DOBYearError" className="">{DOBYearError}</span>
                        </div>
                        <div className={`me-1`}>
                            <label>Month</label>
                            <input
                                type="text"
                                name="DOBMonth"
                                className="form-control"
                                placeholder="Enter month"
                                value={DOBMonth} onChange={handleChange}
                                // required
                                list="monthList"
                            />
                            <span name="DOBMonthError" className="">{DOBMonthError}</span>
                            <datalist id="monthList">
                                {Object.keys(DOB.months).map((month, key) => (
                                    <option value={DOB.months[month].name + " (" + DOB.months[month].days + ")"} key={DOB.months[month].number} />
                                ))}
                            </datalist>
                        </div>
                        <div className={`me-1`}>
                            <label>Date</label>
                            <input
                                type="number"
                                name="DOBDate"
                                className="form-control"
                                placeholder="Enter date"
                                value={DOBDate} onChange={handleChange}
                            // required
                            />
                            <span name="DOBDateError" className="">{DOBDateError}</span>
                        </div>

                    </div>
                    <div className="mb-3">
                        <label>Phone no</label>
                        <input
                            type="text"
                            name="phoneNo"
                            className="form-control"
                            placeholder="Enter phone no"
                            value={phoneNo} onChange={handleChange}
                        // required
                        />
                        <span name="phoneNoError" className="">{phoneNoError}</span>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className={`me-1`}>
                            <label>State</label>
                            <input
                                type="text"
                                name="state"
                                className="form-control"
                                placeholder="Enter state"
                                value={state} onChange={handleChange}
                                // required
                                list="stateList"
                            />
                            <datalist id="stateList">
                                {Object.keys(statewiseCities).map((state, key) => (
                                    <option value={state} key={key} />
                                ))}
                            </datalist>
                            <span name="stateError" className="">{stateError}</span>
                        </div>
                        <div className={`me-1`}>
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                placeholder="Enter city"
                                value={city} onChange={handleChange}
                                // required
                                list="cityList"
                            />
                            <datalist id="cityList">
                                {statewiseCities[state]?.map((city, key) => {
                                    return (
                                        <option value={city} key={key} />
                                    )
                                })}
                            </datalist>
                            <span name="cityError" className="">{cityError}</span>
                        </div>
                        <div className={`me-1`}>
                            <label>Street</label>
                            <input
                                type="text"
                                name="street"
                                className="form-control"
                                placeholder="Enter street"
                                value={street} onChange={handleChange}
                            // required
                            />
                            <span name="streetError" className="">{streetError}</span>
                        </div>
                    </div>
                    <div className="d-grid mb-1">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MoreDetails