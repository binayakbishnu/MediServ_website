import React, { Component } from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBTextArea,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

import footerStyles from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons'

export class Footer extends Component {
    showContactPopUp() {
        if (document.getElementById("contactMePopUp").style.display === "none") {
            document.getElementById("contactMePopUp").style.display = "block";
        } else {
            document.getElementById("contactMePopUp").style.display = "none";
        }
    }

    render() {
        return (
            <footer className={`${footerStyles.footerParent}`}>
                <MDBFooter className={`${footerStyles.MDBParent} text-center`} color='black'>
                    <MDBContainer className='p-4'>
                        <section className=''>
                            <p className="fs-5">
                                <strong>MediServ - Online medical store</strong>
                                <br />Committed to out services✌
                            </p>
                        </section>

                        {/* <section className='mt-5'>
                            <p className='d-flex justify-content-center align-items-center'>
                                <MDBBtn type='button' outline color='dark' className='btn btn-outline-light btn-rounded fw-bold'>
                                    Contact Us
                                </MDBBtn>
                            </p>
                        </section> */}

                        <section className={`${footerStyles.socialIconSection} mt-3`}>
                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1`} href='https://www.linkedin.com/in/binayakbishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 ms-0`} href='https://www.github.com/BinayakBishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 ms-0`} href='https://www.github.com/BinayakBishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1`} href='https://www.instagram.com/binayak_bishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 me-0`} href='#!' role='button' onClick={this.showContactPopUp} target="_self">
                                <FontAwesomeIcon icon={faContactCard} />
                            </a>
                        </section>

                        <section className='mt-3'>
                            <form action=''>
                                <MDBRow className='d-flex justify-content-center'>
                                    <MDBCol size='auto' className='mb-4 mb-md-0'>
                                        <p className='pt-2'>
                                            <strong>Send us a message</strong>
                                        </p>
                                    </MDBCol>

                                    <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                                        <MDBTextArea type='textarea' id='form5Example2' label='Message' labelStyle={{ "color": "black" }} placeholder='Type here...' className={`${footerStyles.inputBox}`} />
                                    </MDBCol>

                                    <MDBCol size='auto' className='mb-4 mb-md-0'>
                                        <MDBBtn color='dark'>Send</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </section>

                        <section className='mt-3'>
                            <div className='container text-center text-md-start mt-5'>
                                <div className='row mt-3'>
                                    {/* <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <i className='fas fa-gem me-3'></i>Company name
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                        </p>
                                    </div> */}

                                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Angular
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                React
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Vue
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Laravel
                                            </a>
                                        </p>
                                    </div>

                                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Pricing
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Settings
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Orders
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                Help
                                            </a>
                                        </p>
                                    </div>

                                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                        <p>
                                            <i className='fas fa-home me-3'></i> Vellore, Tamil Nadu, India
                                        </p>
                                        <p>
                                            <i className='fas fa-envelope me-3'></i>
                                            contact@mediserv.com
                                        </p>
                                        <p>
                                            <i className='fas fa-mobile me-3'></i> + 01 234 567 89
                                        </p>
                                        <p>
                                            <i className='fas fa-phone me-3'></i> + 01 234 567 89
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='mt-3'>
                            <MDBRow>
                                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                            </MDBRow>
                        </section>
                    </MDBContainer>

                    <div className='text-white text-center p-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0px 0px 10px 10px' }}>
                        {/* Binayak Bishnu &nbsp; */}
                        <a className='text-black' href='#welcome'>
                            Go up
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        );
    }
}

export default Footer;