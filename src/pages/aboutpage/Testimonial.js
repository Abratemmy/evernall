import React, { Component } from 'react';
import './about.css';
import styled from 'styled-components';

const ClassNamestyle = styled.div`
    .main-testimonycontainer{
        background-color: #ebe6e6;
        margin:10px;
        padding: 20px;
        
    }
`

const testimonial=[
    {
        id:1,
        thanksgiving:"I want to take the opportunity to thank you for your help in providing me with a robust set of terms and conditions that I know I can rely upon to protect me and my business.",
        testimony_details:"You have provided me with a fantastic professional service right from the initial enquiry. We began with a phone call in which you developed an understanding of my business and how it operates. You then provided me with a draft set of terms which you went through with me point by point, to make sure that I fully understood the meaning of each clause. You offered me different options and gave me some great business advice so that I could make informed decisions. ",
        names:"Hannah Benyon",
        job:"Hannah Benyon Designs",
        className:ClassNamestyle
    },
    {
        id:2,
        thanksgiving:"I wanted to write to thank you for all the amazing service we received from Evernall recently.",
        testimony_details:"We’ve been working with Hazel to prepare the correct legal agreements for our franchise launch and she has been an invaluable support. What really impressed us was the time Hazel took to really understand our business, how we work and the style of our existing documentation. <br /> She’s been on hand to field all our questions, offer advice and has prepared an incredibly thorough agreement which protects both us and our franchisees. Hazel is incredibly eloquent, friendly and knowledgeable and we’re looking forward to working with her to update our other business agreements in the future.",
        names:"Suzy Sanders",
        job:"Alchemy VA Ltd",
        className:ClassNamestyle
    },

    {
        id:3,
        thanksgiving:"hi",
        testimony_details:"Just received my T&C’s for a new workshop I am providing and have been working with Kerry throughout the process. She was brilliant, delivered exactly what I was looking for which was safe and fair contract terms. A bespoke service that made the process super simple and all created within around 10 days! Highly recommended!",
        names:"Josh Fitzgerald",
        job:"FTZ Studios",
        className:ClassNamestyle
    },

    {
        id:4,
        thanksgiving:"hillo",
        testimony_details:"Just received my T&C’s for a new workshop I am providing and have been working with Kerry throughout the process. She was brilliant, delivered exactly what I was looking for which was safe and fair contract terms. A bespoke service that made the process super simple and all created within around 10 days! Highly recommended!",
        names:"Josh Fitzgerald",
        job:"FTZ Studios",
        className:ClassNamestyle
    },
]

export class Testimonial extends Component {
    render() {
        return (
            <div >
                <div className="" style={{marginTop:'40px', backgroundColor:'#ebe6e6'}}>
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
