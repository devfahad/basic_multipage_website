import React from "react";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='col-6 col-lg-3'>
                                    <h2>Company</h2>
                                    <ul>
                                        <li>
                                            <NavLink to='/about'>About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/service'>
                                                Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/contact'>
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/login'>
                                                Log In
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h2>Support</h2>
                                    <ul>
                                        <li>
                                            <NavLink to='/terms'>Terms</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/privacy'>
                                                Privacy
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/faq'>Faq</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/community'>
                                                Community
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h2>Services</h2>
                                    <ul>
                                        <li>
                                            <NavLink to='/payment'>
                                                Payment
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/sendrequest'>
                                                Send Request
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/refund'>
                                                Refunds
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/instruction'>
                                                Instructions
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h2>Follow Us</h2>
                                    <div className='row'>
                                        <div className='col-3 mx-auto'>
                                            <i className='fab fa-facebook-f fontawesome-style'></i>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <i className='fab fa-instagram fontawesome-style'></i>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <i className='fab fa-youtube fontawesome-style'></i>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <i className='fab fa-twitter fontawesome-style'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='mt-5'>
                                <p className='main-hero-para text-center w-100'>
                                    Copyright @ 2022 WebPay. All rights
                                    reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
