import React, { Component } from 'react';
import './contact.css';
import {NavLink} from 'react-router-dom';
import {FaInstagram,FaTwitter,FaLinkedin, FaFacebookF} from 'react-icons/fa';
import ReCaptcha from 'react-recaptcha';
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps"; 

//   import Geocode from 'react-geocode';
import Otherpagesbg from '../otherpagesbg';

export class Contact extends Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
 
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
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
   }
   
    render() {
       

      
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={15}
              defaultCenter={{ lat: 6.451549, lng: 3.429530 }}
            >
              <Marker
              draggable = {true}
              onDragEnd = {this.onMarkerDragEnd}
                position={{ lat: 6.451549, lng: 3.429530 }}>
                  <InfoWindow>
                      <div>Evernall</div>
                  </InfoWindow>
              </Marker>
            </GoogleMap>
          ));

        return (
            <div className="" style={{overflow:"hidden"}}>
               <Otherpagesbg title="Contact Us" />
                <div className="contact-banner container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 contact-banner-col">
                            <div className="contact-banner-div">
                                <div className="contact-banner-title">Address</div>
                                <div className="contact-banner-text">3rd floor Mulliner Towers, 39 Alfred Rewane road, Ikoyi Lagos</div>
                                <div className="contact-banner-text1">                                
                                    <a href='#maps' className="contact-banner-maps"> View on google map </a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 contact-banner-col" style={{backgroundColor:'#425a0d', color:'white'}}>
                            <div className="contact-banner-div">
                                <div className="contact-banner-title">Phone</div>
                                <div className="contact-banner-text">Feel free to contact us </div>
                                <div className="contact-banner-text1">+234 907 838 0989 , +234 810 129 6309</div>
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
                                <div className="contact-details-address">3rd floor Mulliner Towers, 39 Alfred Rewane road, Ikoyi Lagos</div>

                                <div className="contact-details-subtitle">Call Us Today</div>
                                <div className="contact-detail-span"> +234 907 838 0989 , +234 810 129 6309</div>
                                <div className="contact-details-subtitle">Email Us </div>
                                <div className="contact-detail-span">info@evernall.com</div>

                                <div className="contact-details-subtitle">Opening Hour</div>
                                <div className="contact-detail-span">Mon -Thurs: 9:00AM - 5:00PM< br /> Fri: 10:00AM- 4:00PM<br />  Sat  12:00PM-5:00PM</div>
                                <div className="contact-social text-left ">
                                    <ul>
                                        <li><a href="https://www.facebook.com/evernallcontractandlegalservices/"target="_blank" rel="noopener noreferrer" className="contact-Navlink"><FaFacebookF className="contact-social-icons"/> </a> </li>
                                        <li><a href="https://twitter.com/EvernallLegal"target="_blank" rel="noopener noreferrer" className="contact-Navlink contact-Navlink1"><FaTwitter className="contact-social-icons contact-social-icons1"/> </a> </li>
                                        <li><a href="https://instagram.com/legalforstartups?igshid=1n4tbwymo1al9" target="_blank" rel="noopener noreferrer" className="contact-Navlink contact-Navlink1"><FaInstagram className="contact-social-icons contact-social-icons1 text-right"/> </a> </li>
                                        <li><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHZ0QozukuqPAAAAXSsSCuIs3CVrmxbqlopOPJyyHajbClPZr-TBcPLe0txUzCS0XsN_Wup5aZmZsOQny-0a3sO4Wl8nW4wfUnvQF1b74R6dmTxbTdWdWBeBcyMFP5n0AiJQvU=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fevernall-contract-and-legal-services%2Fabout%2F"
                                        target="_blank" rel="noopener noreferrer" className="contact-Navlink contact-Navlink1"><FaLinkedin className="contact-social-icons contact-social-icons1"/> </a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-12"style={{backgroundColor:'#f8f8f8', padding:'5px 0px 0px 30px'}}>
                            <div className="contact-form" >
                                <div className="container">
                                    <h3 className="contact-form-title">Got a question? Give us a call or contact us below</h3>
 {/* Begin Mailchimp Signup Form  */}


<div id="mc_embed_signup">
<form action="https://evernall.us17.list-manage.com/subscribe/post?u=07afcc7e8c92a0f938b253227&amp;id=da06903817" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
    <div id="mc_embed_signup_scroll">
        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                <input type="email"  name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div class="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" name="FNAME" className="" id="mce-FNAME"/>
            </div>
            <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text"  name="LNAME" className="" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
                <label htmlFor="mce-MMERGE3">Message</label>
                <textarea type="text"  name="MMERGE3" className="contacttext-area" id="mce-MMERGE3"></textarea>
            </div>

            <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                <div className="response" id="mce-success-response" style={{display:'none'}}></div>
            </div>    
            <div style={{position: 'absolute', left: '-5000px', ariaHidden:"true"}}><input type="text" name="b_07afcc7e8c92a0f938b253227_da06903817" tabindex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="Submit" name="submit" id="mc-embedded-subscribe" className="button" /></div>
    </div>
</form>
</div>

{/* <!--End mc_embed_signup--> */}






{/* <!--End mc_embed_signup--> */}
                                    {/* <form> */}

                                        
                                        {/* <div className="row">
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
                                               <label htmlFor="checkbox1">
                                                   <div className="row">
                                                       <div className="col-md-1 col-sm-1"><input type="checkbox" name="checkbox"className="checkbox" /></div>
                                                       <div className="col-md-11 col-sm-11">
                                                       <span className="">Please tick this box to accept our privacy policy. Evernall Consultancy Ltd are committed to protecting your <span className="privacy"><NavLink to='/privacypolicy'> privacy</NavLink> </span>  and shall only use the information you provide on this page to respond to your enquiry. 
                                                     <br />
                                                     
                                                      <h6 style={{padding: '30px 0px 10px 0px', fontWeight:'normal'}}> We take your privacy seriously our privacy policy can be found <span className="privacy"><NavLink to='/privacypolicy'>HERE.</NavLink></span>
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
                                            <div className="col-md-4">
                                             <button type="submit" className="signUpButton" style={{marginTop:'30px', border:'none'}}>Submit</button>
                                            </div>
                                            <div className="col-md-4 ">
                                                
                                            </div>
                                        </div> */}
                                        
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* another section starts here */}
                <div className="container-fluid contact-map-background" style={{marginBottom:'16%'}}>
                    <div className="container text-center" id="maps">
                        <h2 className="contact-map-title">Visit us</h2>
                        <div className="contact-map" >
                            <MapWithAMarker className="google-map"
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_8yjOFhnwBfWEGvE2M1L8z3w4necCXIk&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `500px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        )
        
    }
    
}

export default Contact
