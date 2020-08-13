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


// const background = [
//     {
//         id: 1,
//         url:"https://res.cloudinary.com/aitechma/image/upload/v1597070900/Consulting/background-1_bvlax6.png",
//         text:"We provides dynamic legal solutions you need to grow your business in the present day Nigeria.",
//         title:"Led by the Truth"
//     },

//     {
//         id: 2,
//         url:"https://res.cloudinary.com/aitechma/image/upload/v1597071474/Consulting/background-2_d5ufzn.png",
//         text:"Find the support that you need when fighting for your rightWe provides dynamic legal solutions you need to grow your business in the p",
//         title:"Inspired bt right"
//     },
// ]
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
            speed: 200,
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
                                    <h1 className="background-header">Led by the Truth</h1>
                                    <p>We provides dynamic legal solutions you need to grow your business in the present day Nigeria.</p>                     
                                    {/* <NavLink to ="/contact"  className="">i
                                        <div className="firstcon">CONTACT US</div></NavLink>  */}
                                           <Link to ="/contact"  className="button-primary"style={{marginTop:'5px'}}>CONTACT US</Link> 
                               </div>
                           </div>
                            
                       </div>      
                   </div> 

                   <div className="background-pictures background-image2 ">
                       <div className= " background-text container" >
                           <div className="row">
                               <div className="col-lg-7">
                                    <h1 className="background-header">Inspired by Right</h1>
                                    <p>Find the support that you need when fighting for your rightWe provides dynamic legal solutions you need to grow your business in the p</p>
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
                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center" data-aos="fade-up"data-aos-duration="1000" data-aos-easing="linear">
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><AiOutlineInsertRowRight className="practice-logo"/></div>
                                    <div className="practice-area-title">Corporate Legal Services (Retainership)</div>
                                    <p className="practice-area-text">Know your your rights. We will take care about the rest. </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center" data-aos="fade-up" data-aos-duration="1500"data-aos-easing="linear">
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><RiBankLine className="practice-logo"/></div>
                                    <div className="practice-area-title">Contract Drafting & Negotiation</div>
                                    <p className="practice-area-text">Don’t be scared to step out. Contact our law team. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center"data-aos="fade-up"data-aos-duration="2000"data-aos-easing="linear">
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><RiCriminalLine className="practice-logo"/></div>
                                    <div className="practice-area-title">Legal/Process <br /> Compliance Audit</div>
                                    <p className="practice-area-text">We offer effective business legal support all year round </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 practice-area-col text-center"data-aos="fade-up" data-aos-duration="2500" data-aos-easing="linear">
                                <div className=" practice-area-items">
                                    <div className="practice-area-logo"><TiDeviceLaptop className="practice-logo"/></div>
                                    <div className="practice-area-title">Training <br /> (Online and Onsite )</div>
                                    <p className="practice-area-text">Evernall provides trainee to applicants who are willing to learn </p>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-4 col-sm-12"></div>
                            <div className="col-lg-2 col-md-4 col-sm-12" style={{paddingTop:'50px'}}>
                                <NavLink to ="/service" exact className="button-primary">VIEW MORE</NavLink>
                            </div>
                            <div className="col-lg-5 col-md-4 col-sm-12"></div>
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
                           <div className="col-md-3 offset-1  emergency-col emergencycol-2">
                               <IoIosCall className="emergency-icons" />
                               <div className="emergency-span">+234 815 949 1814</div>

                           </div>
                           <div className="col-md-4 emergency-col">
                                <MdEmail className="emergency-icons" />
                                <div className="emergency-span">info@evernall.com</div>
                           </div>
                       </div>
                   </div>
               </div>

               {/* another secton start here, we are there for you */}
               <div className="container-fluid" style={{paddingBottom:'70px'}}>
                   <div className="container  we-are-there">
                       <div className="row">
                           <div className="col-md-6 col-sm-12">
                                <h4 className="we-are-there-title" style={{paddingTop:'30px'}}> We're there for you</h4>
                                <p className="we-are-there-text1">With 25 years of experience in low and justice, our team is focused on delivering quality and value 
                                  to our clients. We achieve this through practical and innovative legal solutions that help our clients. 
                                  Everyone deserves support on the way to justice.
                                </p>

                                <h6 className="we-are-there-text2">Not only do we protect your business, but we promote it too. All the agreements we produce are so well-researched, easy to read and 
                                    watertight that they portray your business in the most positive and professional light possible.
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
