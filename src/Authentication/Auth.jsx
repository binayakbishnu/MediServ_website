import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap'

import authStyles from './Auth.module.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export class Auth extends Component {
    render() {
        return (
            <div className={`${authStyles.authParent}`}>
                <ReactBootstrap.Navbar /* fixed="top" */ collapseOnSelect expand="lg" bg="light" variant="light" className={`${authStyles.bStrapParent}`}>
                    <ReactBootstrap.Container className={`${authStyles.bStrapContainer}`}>
                        <ReactBootstrap.Navbar.Brand href="#home">
                            <NavLink
                                className={`${authStyles.links} ${authStyles.brandLink}`}
                                // activeClassName="is-active"
                                to="/"
                                exact
                            >
                                <ReactBootstrap.Image src={logo} className={`${authStyles.logo} `} fluid />
                            </NavLink>
                        </ReactBootstrap.Navbar.Brand>

                        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootstrap.Nav className="me-auto"></ReactBootstrap.Nav>
                            <ReactBootstrap.Nav className={`${authStyles.socialLinksParent} d-flex flex-row`}>
                                <ReactBootstrap.Nav.Link href="https://www.linkedin.com/in/binayakbishnu"
                                    target="_blank"
                                    className={`${authStyles.socialLinks} ${authStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://twitter.com/binayak_bishnu"
                                    target="_blank"
                                    className={`${authStyles.socialLinks} ${authStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.github.com/BinayakBishnu"
                                    target="_blank"
                                    className={`${authStyles.socialLinks} ${authStyles.links}`}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.instagram.com/binayak_bishnu"
                                    target="_blank"
                                    className={`${authStyles.socialLinks} ${authStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link
                                    // onClick={this.showContactPopUp}
                                    target="_self"
                                    className={`${authStyles.socialLinks} ${authStyles.links} ms-2 ms-md-1`}
                                >
                                    {/* <FontAwesomeIcon icon={faContactCard} /> */}
                                    <p style={{ "margin": 0, "fontWeight": "bold" }}>Contact Us</p>
                                </ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>
                <Outlet />
            </div>
        )
    }
}

export default Auth