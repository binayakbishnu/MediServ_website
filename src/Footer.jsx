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
import medicine1 from './assets/medicine1.jpg'
import delivery1 from './assets/delivery1.jpg'
import onlinedoctor1 from './assets/onlinedoctor1.jpg'
import random1 from './assets/random1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faContactCard, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
                    <MDBContainer className='p-4 ps-0 pe-0'>
                        <section className='mt-3'>
                            <p className="fs-5">
                                <strong>MediServ - Online medical store</strong>
                                <br />Committed to our services✌
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
                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 mb-0`} href='https://www.linkedin.com/in/binayakbishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 mb-0 ms-0`} href='https://www.github.com/BinayakBishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 mb-0 ms-0`} href='https://www.github.com/BinayakBishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 mb-0`} href='https://www.instagram.com/binayak_bishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 mb-0 me-0`} href='#!' role='button' onClick={this.showContactPopUp} target="_self">
                                <FontAwesomeIcon icon={faContactCard} />
                            </a>
                        </section>

                        <section className='mt-3'>
                            <form action=''>
                                <MDBRow className='d-flex justify-content-center'>
                                    <MDBCol size='auto' className='d-flex align-items-center mb-4 mb-md-0'>
                                        <p className='pt-0 m-0'>
                                            <strong>Send us a message</strong>
                                        </p>
                                    </MDBCol>

                                    <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                                        <MDBTextArea contrast type='textarea' id='form5Example2' label='Message' labelStyle={{ "color": "black", "paddingTop": "10px" }}
                                            placeholder='Type here...' className={`${footerStyles.inputBox}`} />
                                    </MDBCol>

                                    <MDBCol size='auto' className='d-flex align-items-center mb-4 mb-md-0'>
                                        <MDBBtn color='dark'>Send</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </section>

                        <section className='mt-5 p-3' style={{"backgroundColor": "rgba(255,255,255,0.35)", "borderRadius": "10px"}}>
                            <div className='container text-center text-md-start mt-0'>
                                <div className='row mt-3'>
                                    <div style={{"borderRight":"1px solid black"}} className='col-md-3 col-lg-4 col-xl-4 mx-0 ms-lg-3 mb-0'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <i className='fas fa-gem me-2'></i>Why we are here
                                        </h6>
                                        <p style={{ "text-align": "justify" }} className="pe-3">
                                            Online health care is gaining rapid popularity day by day and has become a huge part of the urban community in developed countries. It will reduce the time required for consultations and improve the quality of healthcare services in rural areas, removing many infrastructural challenges.
                                        </p>
                                    </div>

                                    <div style={{"borderRight":"1px solid black"}} className='col-md-3 col-lg-2 col-xl-2 mx-0 ms-lg-3 mb-0'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <i className='fas fa-link me-2'></i>Links
                                        </h6>
                                        <p>
                                            <a href='#!' className={`${footerStyles.usefulLinks} text-reset text-decoration-none`}>
                                                Home Page
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className={`${footerStyles.usefulLinks} text-reset text-decoration-none`}>
                                                Consultations
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className={`${footerStyles.usefulLinks} text-reset text-decoration-none`}>
                                                Order Medicine
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className={`${footerStyles.usefulLinks} text-reset text-decoration-none`}>
                                                Profile Page
                                            </a>
                                        </p>
                                    </div>

                                    <div style={{"borderRight":"1px solid black"}} className='col-md-2 col-lg-2 col-xl-2 mx-0 ms-lg-3 mb-0'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <i className='fas fa-book me-2'></i>Learn More

                                        </h6>
                                        <p>
                                            <a href='#!' className={` ${footerStyles.products} text-reset text-decoration-none`}>
                                                About us
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className={` ${footerStyles.products} text-reset text-decoration-none`}>
                                                Storing data
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className={` ${footerStyles.products} text-reset text-decoration-none`}>
                                                Our model
                                            </a>
                                        </p>
                                    </div>

                                    <div className='col-md-4 col-lg-3 col-xl-3 mx-0 ms-lg-3 mb-md-0 mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <i className="fas fa-address-book me-2"></i>Contact
                                        </h6>

                                        <MDBCol>
                                            <MDBRow className="">
                                                <MDBCol size="1" className="me-2"><i className='fas fa-home'></i></MDBCol>
                                                <MDBCol>Vellore, Tamil Nadu, India</MDBCol>
                                            </MDBRow>
                                            <MDBRow className="mt-3">
                                                <MDBCol size="1" className="me-2"><i className='fas fa-envelope'></i></MDBCol>
                                                <MDBCol>contact@mediserv.com</MDBCol>
                                            </MDBRow>
                                            <MDBRow className="mt-3">
                                                <MDBCol size="1" className="me-2"><i className='fas fa-mobile'></i></MDBCol>
                                                <MDBCol>+91 000 000 0000</MDBCol>
                                            </MDBRow>
                                            <MDBRow className="mt-3">
                                                <MDBCol size="1" className="me-2"><i className='fas fa-phone-alt'></i></MDBCol>
                                                <MDBCol>000 000 0000</MDBCol>
                                            </MDBRow>
                                        </MDBCol>

                                        {/* <p>
                                            <i className='fas fa-home me-3'></i>
                                            Vellore, Tamil Nadu, India
                                        </p>
                                        <p>
                                            <i className='fas fa-envelope me-3'></i>
                                            contact@mediserv.com
                                        </p>
                                        <p>
                                            <i className='fas fa-mobile me-3'></i>
                                            + 01 234 567 89
                                        </p>
                                        <p>
                                            <i className='fas fa-phone-alt me-3'></i>
                                            + 01 234 567 89
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={`${footerStyles.gallery} mt-4`}>
                            <MDBRow className={`${footerStyles.galleryRow} d-flex justify-content-around`}>
                                <MDBCol lg='2' md='12' className={`${footerStyles.galleryColumns} mb-4 mb-md-0`}>
                                    <MDBRipple
                                        rippleColor='light'
                                        className={`${footerStyles.galleryRipple} bg-image hover-overlay shadow-1-strong rounded`}
                                    >
                                        <img src={medicine1} alt="" className={`${footerStyles.galleryPics} w-100`} />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className={`${footerStyles.galleryColumns} mb-4 mb-md-0`}>
                                    <MDBRipple
                                        rippleColor='light'
                                        className={`${footerStyles.galleryRipple} bg-image hover-overlay shadow-1-strong rounded`}
                                    >
                                        <img src={onlinedoctor1} className={`${footerStyles.galleryPics} w-100`} />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className={`${footerStyles.galleryColumns} mb-4 mb-md-0`}>
                                    <MDBRipple
                                        rippleColor='light'
                                        className={`${footerStyles.galleryRipple} bg-image hover-overlay shadow-1-strong rounded`}
                                    >
                                        <img src={delivery1} className={`${footerStyles.galleryPics} w-100`} />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol lg='2' md='12' className={`${footerStyles.galleryColumns} mb-4 mb-md-0`}>
                                    <MDBRipple
                                        rippleColor='light'
                                        className={`${footerStyles.galleryRipple} bg-image hover-overlay shadow-1-strong rounded`}
                                    >
                                        <img src={random1} alt="Photo by Braňo on Unsplash" title="Photo by Braňo on Unsplash" className={`${footerStyles.galleryPics} w-100`} />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                {/* <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                    >
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className={`${footerStyles.galleryPics} w-100`} />
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
                                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className={`${footerStyles.galleryPics} w-100`} />
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol> */}
                            </MDBRow>
                        </section>
                    </MDBContainer>

                    {/* <div className='text-white text-center p-2 pt-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0px' }}>
                        <a className='text-black text-decoration-none' href='#welcome'>
                            <FontAwesomeIcon icon={faCopyright} />&nbsp;MediServ
                        </a>
                    </div> */}
                    <div className='text-white text-center p-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0px 0px 10px 10px' }}>
                        <a className='text-black text-decoration-none' href='#nav'>
                            Go up <i className="fas fa-point"></i>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        );
    }
}

export default Footer;