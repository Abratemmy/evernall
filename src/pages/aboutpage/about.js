import React, { Component } from 'react';
import './about.css';
import WOW from 'wowjs';
import Testimony from '../../components/testimony';


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
                   <div className="container-fluid about-background text-center">
                       <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">About us</h1>
                   </div>
                   
                   <div className="container">
                        <h3 className="header-text text-center"> What we do </h3>
                        <hr className="header-text-hr" />
                        <div className="what-we-stand-for-text" style={{textAlign:'justify'}} data-aos="fade-up">
                           <span style={{color:'#030e35', fontSize:'30px'}}>Evernall</span>  is a full service law firm with the know-how to handle the 
                            legal needs of clients in Nigeria's peculiar business environment.

                            At Evernall, we cut through complexity to provide clear, precise and insightful answers. We balance the  big picture with Whatour clients need to know. we think
                            ahead and anticipate issues before they become problems. And we apply our passion for the law and our interest in the world at large for the benefit of clients,
                            colleagues and the wider community.
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
                            <div className="col-lg-4 text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about3_qid1vf.jpg" alt="notseen" 
                                width="50%" height="180" className="aboutpics"/>
                            </div>
                        </div>
                    
                            {/* second paragrapg */}
                        <div className="row about-row">
                            <h4 className="col-12 text-center">We are Innovative</h4>
                            <div className="col-md-4 text-center aboutpiccol col-md-push-8" >
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594810871/Consulting/about2_iwpsfq.jpg" 
                                width="100%" height="180" className="aboutpics" alt="notseen" />                     
                            </div>
                            <div className="col-md-8  col-md-pull-3  about-col ">
                                <div className="">
                                    <div className="what-we-stand-for-text"data-aos="fade-left">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
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
                            <h4 className="col-12 text-center">We promote values</h4>
                            <div className="col-lg-4 text-center aboutpiccol">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594811677/Consulting/about5_wifyko.jpg" alt="notseen" 
                                    width="100%" height="180" className="aboutpics"/>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 about-col">
                                <div className="">
                                    <div className="what-we-stand-for-text"data-aos="fade-left">A pioneer is someone who sees potential, an innovator who is willing to try new things. A pioneer pushes boundaries to advance a cause or idea or break a record. 
                                    These men and women have experienced success in their field, sometimes by overcoming great challenges.</div>
                                </div> 
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
