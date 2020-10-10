import React, { Component } from 'react';
import './about.css';
import styled from 'styled-components';

const ClassNamestyle = styled.div`
    .main-testimonycontainer{
        background-color: #ebe6e6;
        margin:5px;
        padding: 20px;
        
    }
`

const testimonial=[
    {
        id:1,
        thanksgiving:"I want to take the opportunity to thank you for your help in providing me with a robust set of terms and conditions that I know I can rely upon to protect me and my business.",
        testimony_details:"You have provided me with a fantastic professional service right from the initial enquiry and now on a super affordable plan, I go ahead and transact with peace. We began with a phone call in which you developed an understanding of my business and how it operates. You then provided me with a draft set of terms which you went through with me point by point, to make sure that I fully understood the meaning of each clause. You offered me different options and gave me some great business advice so that I could make informed decisions.",
        testimony_details1:'You are truly a great part of my business success.',
        names:"Nkiru Ajah",
        job:"CNM Essentials & Utilities",
        className:ClassNamestyle
    },
    {
        id:2,
        thanksgiving:"We’ve been working with Unwana for over 3 years now, for legal advisory, to prepare the correct legal agreements for our expansion launch and she has been an invaluable support. What really impressed us was the time Unwana took to really understand our business, how we work and the style of our existing documentation. ",
        testimony_details:"She’s been a phone-call away to answer a field of questions, offering sound advice and has prepared an incredibly thorough agreement which protects both us and our franchisees. The staff of Evernall are friendly and knowledgeable and we’re looking forward to working with them again, to update our other business agreements in the future.",
        testimony_details1:'',
        names:"Aniedi Effiong ",
        job:"Cheapmoov Nigeria Limited ",
        className:ClassNamestyle
    },

    {
        id:3,
        thanksgiving:"At the commencement of our business, we engaged Evernall through the referral of a Client – best decision that I have ever made. We started right, because we got our Risk Map, for our kind of business, and with such dedication and precision, we were supplied with all our legal tools to succeed. You cannot imagine how this has positioned us for opportunities and helped us scale through hurdles we did not even imagine, could come up ",
        testimony_details:"This is saying thank you. Our T&C’s are always to the rescue. Your bespoke and swift services are Highly recommended!",
        testimony_details1:'',
        names:"Richard Ogbonna",
        job:"Brenhazy Nigeria Limited ",
        className:ClassNamestyle
    },

    {
        id:4,
        thanksgiving:"I was just at an Idea’s stage when I discussed with Evernall about my prospects. I was gently taken through the possibilities of my business and started, even as a Freelancer, with the Services of Evernall. This was a great decision, it turns out.",
        testimony_details:"Along the years, from my lease negotiations, to employment hurdles, to tendering and winning contracts to contract management at its finest, Evernall has truly come to the rescue. ",
        testimony_details1:'It is like having a trusted big brother or sister – you feel so free, you can bloom. I have expanded without any qualms and the peace of mind that this gives me is epic.',
        testimony_details2:"THANK YOU",
        names:"Prisca-Anne Nkwocha ",
        job:"Cents Supermarket",
        className:ClassNamestyle
    },
]

export class Testimonial extends Component {
    render() {
        return (
            <div >
                <div className="" style={{marginTop:'0px', backgroundColor:'#ebe6e6'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 aboutdropdown-testimonial">
                                <h3 className="aboutdropdown-title">Here's what Our clients say about us</h3>
                                <hr className="footer-hr whyuse-hr" style={{width:'20%'}}/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                {/* code for testimonies */}

                <div className="main-testimonial "> 
                    <div className="container main-testimony">                                       
                            {testimonial.map(testimony=>{                              
                                return(
                                    <ClassNamestyle key={testimony.id}>
                                        <div className="main-testimonycontainer">
                                            <p>{testimony.thanksgiving}</p>
                                            <p>{testimony.testimony_details}</p>
                                            <p>{testimony.testimony_details1}</p>
                                            <p>{testimony.testimony_details2}</p>
                                            <div className="testimony-name">{testimony.names}</div>
                                            <div className="testimony-job">{testimony.job}</div>
                                        </div>
                                    </ClassNamestyle>
                                  
                          
                                )
                     
                                })}
                    </div>    
                    
                  
                </div>
            </div>
        )

    }
}

export default Testimonial
