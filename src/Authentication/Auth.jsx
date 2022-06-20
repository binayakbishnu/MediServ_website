import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap'

import authStyles from './Auth.module.css'

export class Auth extends Component {
    render() {
        return (
            <div>
                <ReactBootstrap.Navbar /* fixed="top" */ collapseOnSelect expand="lg" bg="light" variant="light" className={`${authStyles.bStrapParent}`}>
                    <ReactBootstrap.Container className={`${authStyles.bStrapContainer}`}>
                        <ReactBootstrap.Nav className="me-auto">
                            <ReactBootstrap.Nav.Link className={`${authStyles.links} ${authStyles.leftLinks}`}>
                                <NavLink
                                    className={`text-decoration-none text-black`}
                                    // activeClassName="is-active"
                                    to="/login"
                                    exact
                                >
                                    Login
                                </NavLink>
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link className={`${authStyles.links} ${authStyles.leftLinks}`}>
                                <NavLink
                                    className={`text-decoration-none text-black`}
                                    // activeClassName="is-active"
                                    to="/signUp"
                                    exact
                                >
                                    Signup
                                </NavLink>
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link className={`${authStyles.links} ${authStyles.leftLinks}`}>
                                <NavLink
                                    className={`text-decoration-none text-black`}
                                    // activeClassName="is-active"
                                    to="/mainApp"
                                    exact
                                >
                                    MainApp
                                </NavLink>
                            </ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>

                <Outlet />
            </div>
        )
    }
}

export default Auth