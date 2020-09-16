import React, { Component} from 'react';
import Slider from 'react-slick';
import {NavLink, Link}  from  'react-router-dom';
import './home.css';
import WOW from 'wowjs';
import { RiBankLine, RiCriminalLine} from "react-icons/ri";
import {TiDeviceLaptop} from "react-icons/ti"
import {AiOutlineInsertRowRight} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";
import {IoIosCall} from "react-icons/io";
import {MdEmail} from "react-icons/md";
import Testimony from '../../components/testimony';

export class Home1 extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        var settings = {
            arrows:true,
            lazyLoad:true,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            className:"homeslides"
          };
        return (
            <div>
               <Slider {...settings} className="Slider">
                   
                   <div className=" background-pictures background-image1" style={{}}>
                       <div className="animated slideInDown background-text container" style={{animationDelay:'1s'}} >
                           <div className="row">
                               <div className="col-lg-7 ">
                                    <h2 className="background-header">Trusted Legal Services</h2>
                                    <p>We provide dynamic legal solutions you need to grow your business in the present day Nigeria.</p>                     
                            
                                           <Link to ="/contact"  className="button-primary"style={{marginTop:'5px'}}>CONTACT US</Link> 
                               </div>
                           </div>
                            
                       </div>      
                   </div> 

                   <div className="background-pictures background-image2 ">
                       <div className= " background-text container" >
                           <div className="row">
                               <div className="col-lg-8">
                                    <h2 className="background-header">Topnotch Commercial Support</h2>
                                    <p>We bring over 35 years in business and legal risk assessment and mitigation across various industries </p>
                                   <NavLink to ="/contact" exact className="button-primary">CONTACT US</NavLink>                            
                               </div>
                           </div>
                            
                        </div>
                    </div>

                   
               </Slider>

               {/* another section starts here */}
               <div className="container-fluid" style={{paddingBottom:'70px'}}>
                   <div className="container">
                       <h5 className="header-text text-center">Our  Services</h5>
                       <hr className="header-text-hr" />

                        <div className="row " >
                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center wow animate__slideInLeft" >
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><AiOutlineInsertRowRight className="practice-logo"/></div>
                                    <div className="practice-area-title">Business Entity Formation/Advisory</div>
                                    <p className="practice-area-text">We can help you select the right type of business to form, get you registered with the Corporate 
                                        <span className="" style={{color:'#649200', letterSpacing:'8px', fontFamily:'Rubik',fontWeight:'bold'}}> ...</span>
                                    </p>
                                    <NavLink to='/service/business-entity' className="service-hover-link">view more</NavLink>
                                </div>
                            </div> 

                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center">
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><RiBankLine className="practice-logo"/></div>
                                    <div className="practice-area-title">Contract Drafting & <br /> Negotiation</div>
                                    <p className="practice-area-text">With our robust commercial background, we can draft and negotiate water -tight and easy 
                                        <span className="" style={{color:'#649200', letterSpacing:'8px', fontFamily:'Rubik',fontWeight:'bold'}}> ...</span>
                                    </p>
                                    <NavLink to='/service/contract-drafting' className="service-hover-link">view more</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center">
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><RiCriminalLine className="practice-logo"/></div>
                                    <div className="practice-area-title">Intellectual <br />  Property</div>
                                    <p className="practice-area-text">Your intellectual property (IP) is one of your most valuable assets. We can help you identify
                                        <span className="" style={{color:'#649200', letterSpacing:'8px', fontFamily:'Rubik',fontWeight:'bold'}}> ...</span>
                                    </p>
                                    <NavLink to='/service/intellectual-property' className="service-hover-link">view more</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center wow animate__slideInRight" >
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><TiDeviceLaptop className="practice-logo"/></div>
                                    <div className="practice-area-title">Contract Management Services/Training</div>
                                    <p className="practice-area-text">We offer cradle- to -grave Contract Management Solutions, you do not just have
                                        <span className="" style={{color:'#649200', letterSpacing:'8px', fontFamily:'Rubik',fontWeight:'bold'}}> ...</span>
                                    </p>
                                    <NavLink to='/service/training' className="service-hover-link">view more</NavLink>
                                </div>
                            </div>                            
                        </div>
                        <div className="text-center" style={{paddingTop:'30px'}}>
                            <NavLink to ="/service" exact className="button-primary">VIEW MORE</NavLink>
                        </div>
                       
                   </div>
               </div>

               {/* another section start here */}
               <div className="emergency-calls container-fluid text-center">
                   <div className="emergency-call container">
                       <div className="row">
                           <div className="col-md-4 text-left" style={{fontWeight:'bold'}}>
                                GET IN TOUCH NOW FOR YOUR FREE CONSULTATION
                           </div>
                           <div className="col-lg-1 col-md-1"></div>
                           <div className="col-md-7  emergency-col emergencycol-2">
                                <IoIosCall className="emergency-icons" />
                                <span className="emergency-span">+234 907 838 0989, +234 810 129 6309 </span>
                               {/* <div className="row">
                                   <div className="col-lg-6 col-md-6">
                                       
                                   </div>
                                   <div className="col-lg-5 col-md-5">
                                       <span  className="emergency-span"></span>
                                   </div>
                                    
                               </div> */}

                               <div className="">
                                    <MdEmail className="emergency-icons" />
                                    <span className="emergency-span">info@evernall.com</span>
                               </div>
                           </div>
                        
                       </div>
                   </div>
               </div>

               {/* another secton start here, we are there for you */}
               <div className="container-fluid" style={{paddingBottom:'70px'}}>
                   <div className="container  we-are-there">
                       <div className="row">
                           <div className="col-md-6 col-sm-12">
                                <h4 className="we-are-there-title" style={{paddingTop:'30px'}}> Why us?</h4>
                                <p className="we-are-there-text1">We are  non-traditional, technology-driven and resourceful Firm. We are pragmatic, innovative and practical in our solutions and approach.
                                </p>

                                <h6 className="we-are-there-text2">
                                    We will stay with you through the years. Our bond,  
                                   is our commitment to our Clients, we take our time to understand our Client’s peculiarities and deliver suitable work to match expectations
                                </h6>

                                <h4 className="we-are-there-title" style={{paddingTop:'30px'}}> Our Guarantee</h4>
                                <h6 className="we-are-there-text2">
                                    Dynamism, solution-focused and efficiency. “If it is within our purview, we won’t let it slip.”
                                </h6>
                           </div>
                           <div className="col-md-6 col-sm-12">
                               <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg" alt="cannot see"
                               className="we-are-there-pic" width="100%" height="400"/>
                           </div>
                       </div>
                   </div>
               </div>

               {/* another section starts here */}
                <Testimony />



               {/* another section starts here activity blogs */}
               <div className="container-fluid" style={{paddingBottom:'60px'}}>
                   <div className="container">
                       <h3 className="header-text text-center">Find out about our activities on our blog </h3>
                       <hr className="header-text-hr" />

                       <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card"style={{padding:'0px', margin:'0px', border:'none'}}>
                                    <img className="blog-card-img" src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg" alt="can't see" />
                                    <div className="blog-card-body">
                                        <p className="card-subtitle ">July 25, 2020</p>
                                        <h5 className="card-title">Law and order</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adicing elit ut ullam.</p>
                                        <hr className="blog-card-hr"/>
                                        <div className="blog-link">
                                            <NavLink to="/blog/law-order" className="blog-card-link">READ MORE</NavLink>
                                            <span className="blog-link-span" ><a href="/blog" className="ahref"><BsArrowRight className="blog-link-icon"/></a></span>
                                        </div>                               
                                    </div>
                                </div>
                           </div>

                           <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card"style={{padding:'0px', margin:'0px', border:'none'}}>
                                    <img className="blog-card-img" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg" alt="can't see" />
                                    <div className="blog-card-body">
                                        <h6 className="card-subtitle ">July 25, 2020</h6>
                                        <h5 className="card-title">Time for action</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adicing elit ut ullam.</p>
                                        <hr className="blog-card-hr"/>
                                        <div className="blog-link">
                                            <NavLink to="/blog/3" className="blog-card-link">READ MORE</NavLink>
                                            <span className="blog-link-span" ><a href="/blog" className="ahref"><BsArrowRight className="blog-link-icon"/></a></span>
                                        </div>                               
                                    </div>
                                </div>
                           </div>

                           <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card"style={{padding:'0px', margin:'0px', border:'none'}}>
                                    <img className="blog-card-img" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776__340.jpg" alt="can't see" />
                                    <div className="blog-card-body">
                                        <h6 className="card-subtitle ">July 25, 2020</h6>
                                        <h5 className="card-title">Dream big</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adicing elit ut ullam.</p>
                                        <hr className="blog-card-hr"/>
                                        <div className="blog-link">
                                            <NavLink to="/blog/4" className="blog-card-link">READ MORE</NavLink>
                                            <span className="blog-link-span" ><a href="/blog" className="ahref"><BsArrowRight className="blog-link-icon"/></a></span>
                                        </div>                               
                                    </div>
                                </div>
                           </div>

                           <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card"style={{padding:'0px', margin:'0px', border:'none'}}>
                                    <img className="blog-card-img" src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501__340.jpg" alt="can't see" />
                                    <div className="blog-card-body">
                                        <h6 className="card-subtitle ">July 25, 2020</h6>
                                        <h5 className="card-title">Lawyer lifestyle</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adicing elit ut ullam.</p>
                                        <hr className="blog-card-hr"/>
                                        <div className="blog-link">
                                            <NavLink to="/blog/2" className="blog-card-link">READ MORE</NavLink>
                                            <span className="blog-link-span" ><a href="/blog" className="ahref"><BsArrowRight className="blog-link-icon"/></a></span>
                                        </div>                               
                                    </div>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default Home1
