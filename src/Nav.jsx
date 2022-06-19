import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons'

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
                    <ReactBootstrap.Navbar.Brand href="#home">
                        <ReactBootstrap.NavLink
                            className={`${navStyles.links} ${navStyles.brandLink}`}
                            activeClassName="is-active"
                            to="/"
                            exact
                        >
                            <ReactBootstrap.Image src={logo} className={`${navStyles.logo} `} fluid />
                            {/* Binayak */}
                        </ReactBootstrap.NavLink>
                    </ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="me-auto">
                            <ReactBootstrap.Nav.Link href="#home" className={`${navStyles.links} ${navStyles.leftLinks}`}>Home</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="#consult" className={`${navStyles.links} ${navStyles.leftLinks}`}>Consult</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="#order" className={`${navStyles.links} ${navStyles.leftLinks}`}>Order</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.NavDropdown title="Profile" id="collasible-nav-dropdown" className={`${navStyles.links} ${navStyles.leftLinks}`}>
                                <ReactBootstrap.NavDropdown.Item href="#editProfile">Edit profile</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item href="#paymentHistory">See payment history</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Divider />
                                <ReactBootstrap.NavDropdown.Item href="#logout">Log Out</ReactBootstrap.NavDropdown.Item>
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