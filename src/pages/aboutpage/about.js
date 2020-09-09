import React, { Component } from 'react';
import './about.css';
import Otherpagesbg from '../otherpagesbg';
import WOW from 'wowjs';
import {FaArrowRight} from 'react-icons/fa';


export class About extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        return (
            <div >
                <div className="">
                   <Otherpagesbg title="About Us" subtitle=""/>
                   
                   <div className="container">
                        <h3 className="header-text text-center"> What we do </h3>
                        <hr className="header-text-hr" />
                        <div className="what-we-stand-for-text  wow animate__slideInUp" style={{textAlign:'justify'}} >
                           <span style={{color:'#1e3f50', fontSize:'22px', fontweight:'bold', fontFamily:'Rubik'}}>Evernall</span>  is a non-traditional Law Firm that provides dynamic legal solutions you need to grow your business in the present day Nigeria. From freelancing to startups,
                            through scaling for growth and thriving, Evernall will support you in every step of the way.                         
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="what-we-stand-for-col">
                                    <div className="what-we-stand-for-text1 wow animate__slideInLeft">Our Solutions are practical and accessible and are tailored to meet real life situation that any business may face. 
                                    We are postured towards preventing risks in businesses rather than reacting to the failed outcome. With Evernall as your partner, you can go on and succeed in your core business, 
                                    while we make sure that you are complying to the laws of business and negotiating fair and productive transactions.</div>
                                </div>
                            </div>
                            <div className="col-md-2 text-center" style={{ marginTop:'10%'}}>
                                <FaArrowRight className="about-arrow"  style={{fontSize:'40px'}}/>
                            </div>
                            <div className="col-md-5">
                                <div className="what-we-stand-for-col"style={{marginTop:'20%'}}>
                                    <div className="what-we-stand-for-text1 wow animate__slideInRight" >Our Approach is broadly twofold – We prepare our clients to be complaint with 
                                        their processes and offer effective business legal support all year round.
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                   {/* another section starts here */}

                   

                    {/* another section starts here */}
                    <div className="container"> 
                        <div className="" style={{padding: '20px 0px 20px 0px'}}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 " style={{backgroundColor:'#ddd5d5'}}>
                                    <div className="whyuseuscard">
                                        <h6> We are a Legal Service Provider – operating both onsite and actively virtual, to meet the needs of today’s businesses. Many entrepreneurs and freelancers complain 
                                            that law firms are not composed to keep up with modern business trends and so our solutions are built to be efficient and easy to assess.</h6>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-4"style={{backgroundColor:'#ebe6e6'}}>
                                    <div className="whyuseuscard">
                                        <h6>
                                            We have standardized many of our services into “legal packages” and for Small businesses and Freelancers, we have contract templates that can be easily purchased and free resources too.
                                        </h6>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-4"style={{backgroundColor:'#ddd5d5'}}>
                                    <div className="whyuseuscard">
                                        <h6>Our fees are affordable and always under a fixed price. </h6>
                                        <h6>Our approach is personal and practical</h6>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* another section starts here */}
                    <div className="">
                        <div className="container" style={{paddingTop:'50px'}}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyuseusfirst">
                                        <p className="whyuseusfirstp1">When we prepare your Terms, Contracts or Agreements, we never use a standard format or copy and paste. We work closely with you to produce 
                                            all documentation that is bespoke and specific to your industry and needs.
                                        </p>
                                        <p className="whyuseusfirstp2">Not only do we protect your business, but we promote it too. All the agreements we produce are so well-researched, easy to read and watertight that they
                                            portray your business in the most positive and professional light possible.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyuseussecond">
                                        <h4>How we work</h4>
                                        <p >We get to know you. We visit you. We listen and we learn. We find out what works well and what doesn’t. Next, we prepare drafts which address the relevant issues.
                                            We take you through the document, clause by clause, word by word in plain English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   <div className="container">
                        {/* <h3 className="header-text text-center"> What we stand for</h3>
                        <hr className="header-text-hr" />

                        <div className="row about-row">
                            <div className="col-lg-8 col-md-12 col-sm-12 about-col">
                                <div className="">
                                    <h4>We are Pioneers</h4>
                                    <div className="what-we-stand-for-text"data-aos="fade-right">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
                            </div> 
                            <div className="col-lg-4  text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about3_qid1vf.jpg" alt="notseen" 
                                width="50%" height="180" className="aboutpics"/>
                            </div>
                        </div> */}
                    
                            {/* second paragrapg */}
                        {/* <div className="row about-row">
                            
                            <div className="col-md-8  order-md-8  about-col" >
                                <div className="">
                                    <h4 className="col-12 ">We are Innovative</h4>
                                    <div className="what-we-stand-for-text"data-aos="fade-left">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
                                                 
                            </div>
                            <div className="col-md-4  order-md-4  text-center aboutpiccol ">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about2_iwpsfq.jpg" 
                                    width="100%" height="180" className="aboutpics" alt="notseen" />    
                            </div> 
                        </div>
                             */}
                            {/* third para */}

                        {/* <div className="row about-row">
                            <div className="col-lg-8 col-md-12 col-sm-12 about-col">
                                <div className="">
                                    <h4>We build relationships</h4>
                                    <div className="what-we-stand-for-text"data-aos="fade-right">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
                            </div> 
                            <div className="col-lg-4  text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about3_qid1vf.jpg" alt="notseen" 
                                width="50%" height="180" className="aboutpics"/>
                            </div>
                        </div> */}
                            
                            {/* fourth para */}
                        {/* <div className="row about-row">
                            <div className="col-lg-8  about-col order-md-8">
                                <h4 className="col-12">We promote values</h4>
                                <div className="">
                                    <div className="what-we-stand-for-text"data-aos="fade-left">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div>    
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 order-md-4 aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594811677/Consulting/about5_wifyko.jpg" alt="notseen" 
                                    width="100%" height="180" className="aboutpics"/>
                                
                            </div>
                        </div>  */}

                            {/* fifth para */}
                        {/* <div className="row about-row">
                            <div className="col-lg-8 col-md-12 col-sm-12 about-col">
                                <div className="">
                                    <h4>We are grounded</h4>
                                    <div className="what-we-stand-for-text"data-aos="fade-right">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
                            </div> 
                            <div className="col-lg-4  text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about3_qid1vf.jpg" alt="notseen" 
                                width="50%" height="180" className="aboutpics"/>
                            </div>
                        </div> */}
                   </div>
                </div>

                {/* another section starts here */}
                
               
               {/* another section. this section is copied from testimony.js*/}
               {/* <Testimony /> */}
                
            </div>
        )
    }
}

export default About
