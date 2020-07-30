import React, { Component } from 'react';
import './about.css';
import Testimony from '../../components/testimony';
import Otherpagesbg from '../otherpagesbg';


export class About extends Component {
    
    render() {
        return (
            <div >
                <div className="">
                   <Otherpagesbg title="About Us" subtitle=""/>
                   
                   <div className="container">
                        <h3 className="header-text text-center"> What we do </h3>
                        <hr className="header-text-hr" />
                        <div className="what-we-stand-for-text" style={{textAlign:'justify'}} data-aos="fade-up">
                           <span style={{color:'#0b1433', fontSize:'20px', fontweight:'bold', fontFamily:'Lustria'}}>Evernall</span>  is a non-traditional Law Firm that provides dynamic legal solutions you need to grow your business in the present day Nigeria. From freelancing to startups,
                            through scaling for growth and thriving, Evernall will support you in every step of the way.                         
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="what-we-stand-for-col">
                                    <div className="what-we-stand-for-text1">Our Solutions are practical and accessible and are tailored to meet real life situation that any business may face. We are postured towards preventing risks in businesses rather than reacting to the failed outcome. With Evernall as your partner, you can do go on and succeed in your core business, 
                                    while we make sure that you are complying to the laws of business and negotiating fair and production transactions.</div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <div className="what-we-stand-for-text1">Our Approach is broadly twofold – We prepare our clients to be complaint with 
                                    their processes and offer effective business legal support all year round.</div>
                            </div>
                        </div>
                   </div>

                    {/* another section starts here */}
                   <div className="container">
                        <h3 className="header-text text-center"> What we stand for</h3>
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
                        </div>
                    
                            {/* second paragrapg */}
                        <div className="row about-row">
                            
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
                            
                            {/* third para */}
                        <div className="row about-row">
                            <h4 className="col-12">We build relationships</h4>
                            <div className="col-lg-8 col-md-12 col-sm-12 about-col" >
                                <div className="">
                                    <div className="what-we-stand-for-text"data-aos="fade-right">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
                            </div> 
                            <div className="col-lg-4 text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about4_jjtin4.jpg" alt="notseen" 
                                    width="100%" height="180" className="aboutpics"/>
                            </div>
                        </div>
                            
                            {/* fourth para */}
                        <div className="row about-row">
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
                        </div> 

                            {/* fifth para */}
                        <div className="row about-row">
                            <h4 className="col-12 ">We are grounded</h4>
                            <div className="col-lg-8 col-md-12 col-sm-12 about-col">
                                <div className="">
                                    <div className="what-we-stand-for-text"data-aos="fade-right">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
                            </div> 
                            <div className="col-lg-4 text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594811678/Consulting/about1_x0f0ay.jpg" alt="notseen" 
                                    width="100%" height="180" className="aboutpics"/>
                            </div> 
                        </div>
                   </div>
                </div>

                {/* another section starts here */}
                <div className="container" style={{paddingBottom:'70px'}}>
                    <h3 className="header-text text-center"> Legal solutions</h3>
                    <hr className="header-text-hr" />

                    <div className="" style={{padding:'10px 10% 10px 10%'}}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594822754/Consulting/legal3_zjahod.png"
                                width="100%" height="200" alt="not seen" />
                                <div className="legal-solution-title text-center">
                                    Legal Advice
                                </div>
                                <div className="legal-solution-text text-center">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594819965/Consulting/legal1_zpusc4.jpg"
                                width="100%" height="220" alt="not seen" />
                                <div className="legal-solution-title text-center"style={{paddingTop:'40px'}}>
                                    Contract Drafting
                                </div>
                                <div className="legal-solution-text text-center" >
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594825092/Consulting/consulting_eg2upu.webp" 
                                width="100%" height="200" alt="not seen" />
                                <div className="legal-solution-title text-center">
                                    Consulting
                                </div>
                                <div className="legal-solution-text text-center">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
               {/* another section. this section is copied from testimony.js*/}
               <Testimony />
                
            </div>
        )
    }
}

export default About