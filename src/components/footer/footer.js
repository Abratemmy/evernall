import React, { Component } from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container footer-container">
                    <div className="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 footer-column">
                            <div className="footer-title">Evernall</div>
                            <hr className="footer-hr"/>
                            <p>Facilis ipsum reprehenderit nemo molestias. 
                                Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet
                            </p>    
                        </div>

                        <div class="col-lg-2 col-md-3 col-sm-12 offset-sm-1 footer-column">
                            <div className="footer-title">Navigation</div>
                            <hr className="footer-hr"/>
                            <p>
                                <ul>
                                    <li><NavLink to='/' className="footer-nav">Home</NavLink></li>
                                    <li><NavLink to='/practicearea' className="footer-nav">Practice Area</NavLink></li>
                                    <li><NavLink to='/blog' className="footer-nav">Blog</NavLink></li>
                                    <li><NavLink to='/about' className="footer-nav">About us</NavLink></li>
                                </ul>
                            </p>    
                        </div>

                        <div class="col-lg- col-md-3 col-sm-12  footer-column">
                            <div className="footer-title">Contact Information</div>
                            <hr className="footer-hr"/>
                            <p>
                                <h6>Lekki-Ajah express road, Lagos State</h6>
                                <div>+234 807 8793 832</div>
                                <div>info@evernall.com</div>
                            </p>    
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-12  footer-column">
                            <div className="footer-title">Emergency Contact</div>
                            <hr className="footer-hr"/>
                            <p>
                                <form>
                                    <input type="text" placeholder="Email" name="email" className="inputtext"/>
                                    <textarea name="message" id=""  rows="5" placeholder="Message" className="inputtext textarea"></textarea>
                                    <div className="btn">
                                        <button type="submit" className="button-primary button-primary1">Submit</button>
                                    </div>
                                </form>
                            </p>    
                        </div>
                    </div>

                    <div className="copyright text-center">
                        &copy; Evernall Nigeria 2020, designed by <span className="abraolas">Abrolas Info-Tech Nigeria</span>  
                    </div>
                    <div className="footer-social text-center">
                        <ul>
                            <li><NavLink to="https://facebook.com" className="footer-Navlink"><FaFacebookF className="social-icons"/> </NavLink> </li>
                            <li><NavLink to="https://twitter.com" className="footer-Navlink"><FaTwitter className="social-icons"/> </NavLink> </li>
                            <li><NavLink to="https://instagram.com" className="footer-Navlink"><FaInstagram className="social-icons"/> </NavLink> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
