import React, { Component } from 'react';
import './contact.css';
import WOW from 'wowjs';
import {NavLink} from 'react-router-dom';
import {FaTwitter, FaInstagram, FaFacebookF} from 'react-icons/fa';
import ReCaptcha from 'react-recaptcha';

export class Contact extends Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
    // componentDidMount() {
    //     if (this.captchaDemo) {
    //         console.log("started, just a second...")
    //         this.captchaDemo.reset();
    //     }
    //   }
    onLoadRecaptcha() {
          if (this.captchaDemo) {
              this.captchaDemo.reset();
          }
      }
    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
      }
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();

        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
   }
    render() {
        return (
            <div>
                <div className="container-fluid about-background text-center">
                    <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">Contact Us</h1>
                </div>

                <div className="contact-banner container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 contact-banner-col">
                            <div className="contact-banner-div">
                                <div className="contact-banner-title">Address</div>
                                <div className="contact-banner-text">Lekki-Ajah express road, Lagos State</div>
                                <div className="contact-banner-text1">View on google map</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 contact-banner-col" style={{backgroundColor:'#425a0d', color:'white'}}>
                            <div className="contact-banner-div">
                                <div className="contact-banner-title">Phone</div>
                                <div className="contact-banner-text">Feel free to contact us </div>
                                <div className="contact-banner-text1">+234 807 8793 832</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 contact-banner-col">
                            <div className="contact-banner-div">
                                <div className="contact-banner-title">Email</div>
                                <div className="contact-banner-text">Email us anyday, any time</div>
                                <div className="contact-banner-text1">info@evernall.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* another section starts here */}
                <div className="container-fluid contact-section" >
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 " style={{paddingLeft:'70px'}}>
                            <div className="container contact-details">
                                <div className="contact-details-title">
                                    <h3 className="contact-details-title">Contact Details</h3>
                                </div>
                                <div className="contact-details-address">Lekki-Ajah express road, Lagos State</div>

                                <div className="contact-details-subtitle">Call Us Today</div>
                                <div className="contact-detail-span"> +234 807 8793 832 </div>
                                <div className="contact-details-subtitle">Email Us </div>
                                <div className="contact-detail-span">info@evernall.com</div>

                                <div className="contact-details-subtitle">Opening Hour</div>
                                <div className="contact-detail-span">Mon -Thurs: 9:00AM - 5:00PM< br /> Fri: 10:00AM- 4:00PM<br />  Sat  12:00PM-5:00PM</div>
                                <div className="contact-social text-left no-margin">
                                    <ul>
                                        <li><NavLink to="https://facebook.com" className="contact-Navlink" style={{paddingRight: '12px'}}><FaFacebookF className="contact-social-icons"/> </NavLink> </li>
                                        <li><NavLink to="https://twitter.com" className="contact-Navlink contact-Navlink1"><FaTwitter className="contact-social-icons contact-social-icons1"/> </NavLink> </li>
                                        <li><NavLink to="https://instagram.com" className="contact-Navlink contact-Navlink1"><FaInstagram className="contact-social-icons contact-social-icons1 text-right"/> </NavLink> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-12"style={{backgroundColor:'#f8f8f8', padding:'5px 0px 0px 30px'}}>
                            <div className="contact-form" >
                                <div className="container">
                                    <h3 className="contact-form-title">Got a question? Give us a call or contact us below</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" rules="required|max:255" name="firstname"placeholder="First Name"  className="inputfield"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" rules="required|max:255" name="lastname"placeholder=" Last Name"  className="inputfield"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" rules="required|max:255" name="email" placeholder=" Email"  className="inputfield"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" rules="required|max:255" name="phone"placeholder=" Phone Number"  className="inputfield"/>
                                            </div>
                                            <div className="col-md-12">
                                                <textarea name="message" id="" cols="30" rows="5" placeholder="Message" className="textarea"rules="required|max:255"
                                                ></textarea>
                                            </div>
                                            <div className="col-md-12 checkboxdiv">    
                                               <label for="checkbox1">
                                                   <div className="row">
                                                       <div className="col-md-0.5 col-sm-0.5"><input type="checkbox" name="checkbox"className="checkbox" /></div>
                                                       <div className="col-md-11 col-sm-11">
                                                       <span className="">Please tick this box to accept our privacy policy. Evernall Consultancy Ltd are committed to protecting your <span className="privacy"><NavLink to='/privacy'> privacy</NavLink> </span>  and shall only use the information you provide on this page to respond to your enquiry. 
                                                     <br />
                                                     
                                                      <h6 style={{padding: '30px 0px 10px 0px', fontWeight:'normal'}}> We take your privacy seriously our privacy policy can be found <span className="privacy"><NavLink to='/privacy'>HERE.</NavLink></span>
                                                     </h6>  </span>
                                                       </div>
                                                   </div>
                                                    
                                                    
                                                </label> 
                                                
                                            </div>
                                        </div>
                                        <ReCaptcha
                                            ref={(el) => {this.captchaDemo = el;}}
                                            size="normal"
                                            data-theme="dark"            
                                            render="explicit"
                                            sitekey="6LeZsLMZAAAAALuZ7btzX6HNJEGodL678iIrcJPS"
                                            onloadCallback={this.onLoadRecaptcha}
                                            verifyCallback={this.verifyCallback}
                                        />
                                        <div className="row">
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4 text-right">
                                                <button type="submit" className="signUpButton" style={{marginTop:'20px', border:'none'}}>Submit</button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* another section starts here */}
                <div className="container-fluid contact-map-background">
                    <div className="container text-center">
                        <h2 className="contact-map-title">Visit us</h2>
                        <div className="contact-map">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
