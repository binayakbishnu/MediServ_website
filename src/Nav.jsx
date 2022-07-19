import React from 'react'
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import navStyles from './Navbar.module.css'
import logo from './assets/logo.png'

function Nav() {
    return (
        <nav className={`${navStyles.navParent}`}>
            {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}

            <ReactBootstrap.Navbar /* fixed="top" */ collapseOnSelect expand="lg" bg="dark" variant="light" className={`${navStyles.bStrapParent}`}>
                <ReactBootstrap.Container className={`${navStyles.bStrapContainer}`}>
                    <ReactBootstrap.Navbar.Brand>
                        <NavLink
                            className={`${navStyles.links} ${navStyles.brandLink}`}
                            // activeClassName="is-active"
                            to="/mainApp"
                        >
                            <ReactBootstrap.Image src={logo} className={`${navStyles.logo} `} fluid />
                            {/* Binayak */}
                        </NavLink>
                    </ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="me-auto">
                            {/* <ReactBootstrap.Nav.Link className={`${navStyles.links} ${navStyles.leftLinks}`}> */}
                                <NavLink
                                    className={`text-decoration-none text-black nav-link`}
                                    // activeClassName="is-active"
                                    to="/mainApp"

                                >
                                    Home
                                </NavLink>
                            {/* </ReactBootstrap.Nav.Link> */}
                            {/* <ReactBootstrap.Nav.Link className={`${navStyles.links} ${navStyles.leftLinks}`}> */}
                                <NavLink
                                    className={`text-decoration-none text-black nav-link`}
                                    // activeClassName="is-active"
                                    to="/mainApp/consultationForm"

                                >
                                    Consult
                                </NavLink>
                            {/* </ReactBootstrap.Nav.Link> */}
                            {/* <ReactBootstrap.Nav.Link className={`${navStyles.links} ${navStyles.leftLinks}`}> */}
                                <NavLink
                                    className={`text-decoration-none text-black nav-link`}
                                    // activeClassName="is-active"
                                    to="/mainApp/orderForm"

                                >
                                    Order
                                </NavLink>
                            {/* </ReactBootstrap.Nav.Link> */}
                            <ReactBootstrap.NavDropdown title={<span className="text-black my-auto">Profile</span>} menuVariant='dark'
                                id="collasible-nav-dropdown" className={`${navStyles.links} ${navStyles.leftLinks} text-black`}>
                                <ReactBootstrap.NavDropdown.Item className={`${navStyles.navDropdownItem}`}>
                                    <NavLink
                                        className={`text-decoration-none text-white`}
                                        // activeClassName="is-active"
                                        to="/mainApp/profilePage"
    
                                    >
                                        Edit Profile
                                    </NavLink>
                                </ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item className={`${navStyles.navDropdownItem}`}>
                                    <NavLink
                                        className={`text-decoration-none text-white`}
                                        // activeClassName="is-active"
                                        to="/mainApp/paymentHistory"
    
                                    >
                                        Payment History
                                    </NavLink>
                                </ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Divider />
                                <ReactBootstrap.NavDropdown.Item className={`${navStyles.navDropdownItem}`}>
                                    <NavLink
                                        className={`text-decoration-none text-white`}
                                        // activeClassName="is-active"
                                        to="/"
    
                                    >
                                        Log Out
                                    </NavLink>
                                </ReactBootstrap.NavDropdown.Item>
                            </ReactBootstrap.NavDropdown>
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Nav className={`${navStyles.socialLinksParent} d-flex flex-row`}>
                            <ReactBootstrap.Nav.Link href="https://www.linkedin.com/in/binayakbishnu"
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="https://twitter.com/binayak_bishnu"
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="https://www.github.com/BinayakBishnu"
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links}`}
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="https://www.instagram.com/binayak_bishnu"
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link
                                // onClick={this.showContactPopUp}
                                target="_self"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                            >
                                {/* <FontAwesomeIcon icon={faContactCard} /> */}
                                <p style={{ "margin": 0, "fontWeight": "bold" }}>Contact Us</p>
                            </ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>
        </nav>
    )
}

export default Nav