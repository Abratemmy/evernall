import React, { Component } from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-banner">
                    <div className="footer-banner-text">Do you want our latest legal updates?</div>
                    <div >
                        <NavLink to='signUp' className="signUpButton"> Sign up here</NavLink></div>
                </div>
            
                <div className="footersection2">
                    <div className="container footer-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 footer-column">
                                <div className="footer-title">Evernall</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">Facilis ipsum reprehenderit nemo molestias. 
                                    Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-12 offset-sm-1 footer-column">
                                <div className="footer-title">Navigation</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">
                                    <ul>
                                        <li><NavLink to='/' className="footer-nav">Home</NavLink></li>
                                        <li><NavLink to='/practicearea' className="footer-nav">Services</NavLink></li>
                                        <li><NavLink to='/blog' className="footer-nav">Blog</NavLink></li>
                                        <li><NavLink to='/about' className="footer-nav">About us</NavLink></li>
                                    </ul>
                                </div>          
                            </div>

                            <div className="col-lg- col-md-3 col-sm-12  footer-column">
                                <div className="footer-title">Contact Information</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">
                                    <h6>Lekki-Ajah express road, Lagos State</h6>
                                    <div>+234 807 8793 832</div>
                                    <>info@evernall.com</>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12  footer-column">
                                <div className="footer-title">Opening Hours</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">
                                    <div className="">Mon -Thurs: 9:00AM - 5:00PM</div>
                                    <div className="" >Fri: 10AM- 4PM</div>
                                    <div className="">Sat  12PM-5PM</div>
                                </div>
                            </div>
                        </div>


                        <div className="footer-social text-center">
                            <ul>
                                <li><NavLink to="https://facebook.com" className="footer-Navlink"><FaFacebookF className="social-icons"/> </NavLink> </li>
                                <li><NavLink to="https://twitter.com" className="footer-Navlink"><FaTwitter className="social-icons"/> </NavLink> </li>
                                <li><NavLink to="https://instagram.com" className="footer-Navlink"><FaInstagram className="social-icons"/> </NavLink> </li>
                            </ul>
                        </div>

                        <div className="copyright text-center">                            
                            <span> &copy; 2020 Evernall Consultant Ltd. All Rights Reserved. | Website design & build by <span> <a href ='Abraolas Info-Tech Nigeria' className="abraolas">Abraolas</a> </span> </span>  
                            <div className="copyrightdiv"><NavLink to ='discliamer' className="copyrightnav">Disclaimer </NavLink> | 
                            <NavLink to ='discliamer'className="copyrightnav">Privacy Policy</NavLink>|
                            <NavLink to ='discliamer' className="copyrightnav">Terms of Use  </NavLink> </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
