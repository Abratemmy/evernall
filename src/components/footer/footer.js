import React, { Component } from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import {FaFacebookF,FaTwitter,FaLinkedin, FaInstagram} from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-banner">
                    <div className="container footer-banner-text">Do you want our business legal tips delivered to your inbox?</div>
                    <div >
                        <a href="http://eepurl.com/ha4rc1" target="_blank" rel="noopener noreferrer" className="signUpButton"> Sign up here</a></div>
                </div>
            
                <div className="footersection2">
                    <div className="container footer-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-title">Evernall</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text" style={{textAlign:'justify'}}>Evernall is a non-traditional Law Firm that provides dynamic legal solutions you need to grow your business in the present day Nigeria. From freelancing to startups,
                                  through scaling for growth and thriving, Evernall will support you in every step of the way.
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-5 col-sm-12 offset-lg-1 offset-md-1 footer-column">
                                <div className="footer-title">Navigation</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">
                                    <ul>
                                        <li><NavLink to='/evernall' className="footer-nav">Home</NavLink></li>
                                        <li><NavLink to='/service' className="footer-nav">Services</NavLink></li>
                                        {/* <li><NavLink to='/blog/law-order' className="footer-nav">Blog</NavLink></li> */}
                                        <li><NavLink to='/about' className="footer-nav">About us</NavLink></li>
                                        <li><NavLink to='/faq' className="footer-nav">FAQ</NavLink></li>
                                        <li><NavLink to='/contact' className="footer-nav">Contact</NavLink></li>
                                    </ul>
                                </div>          
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12  footer-column">
                                <div className="footer-title">Contact Information</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">
                                    <h6>3rd floor Mulliner Towers, 39 Alfred Rewane road, Ikoyi Lagos</h6>
                                    <div>+234 907 838 0989 ,<br /> +234 810 129 6309</div>
                                    <>info@evernall.com</>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-5 col-sm-12 offset-md-1 footer-column">
                                <div className="footer-title">Opening Hours</div>
                                <hr className="footer-hr"/>
                                <div className="footer-text">
                                    <h6 className="" style={{padding:'0px'}}>Mon -Thurs: 9:00AM - 5:00PM</h6>
                                    <div className="" >Fri: 10AM- 4PM</div>
                                    <div className="">Sat  12PM-5PM</div>
                                </div>
                            </div>
                        </div>


                        <div className="footer-social text-center">
                            <ul>
                                <li><a href="https://www.facebook.com/evernallcontractandlegalservices/" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaFacebookF className="social-icons"/> </a> </li>
                                <li><a href="https://twitter.com/EvernallLegal"target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaTwitter className="social-icons"/> </a> </li>
                                <li><a href="https://instagram.com/legalforstartups?igshid=1n4tbwymo1al9" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaInstagram className="social-icons"/> </a> </li>
                                <li><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHZ0QozukuqPAAAAXSsSCuIs3CVrmxbqlopOPJyyHajbClPZr-TBcPLe0txUzCS0XsN_Wup5aZmZsOQny-0a3sO4Wl8nW4wfUnvQF1b74R6dmTxbTdWdWBeBcyMFP5n0AiJQvU=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fevernall-contract-and-legal-services%2Fabout%2F"
                                target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaLinkedin className="social-icons"/> </a></li>
                            </ul>
                        </div>

                        <div className="copyright text-center">                            
                            <span>Copyright &copy; 2020 Evernall Consulting Ltd. All Rights Reserved
                               </span>  
                            <div className="copyrightdiv"><NavLink to ='disclaimer' className="copyrightnav">Disclaimer </NavLink> | 
                            <NavLink to ='privacypolicy'className="copyrightnav">Privacy Policy</NavLink>|
                            <NavLink to ='termsofuse' className="copyrightnav copyrightnavterms">Terms of Use  </NavLink> </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
