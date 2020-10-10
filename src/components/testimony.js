import React, { Component } from 'react';
import Slider from 'react-slick';import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

  const testimonial=[
    {
        id:1,
        thanksgiving:"I want to take the opportunity to thank you for your help in providing me with a robust set of terms and conditions that I know I can rely upon to protect me and my business.",
        testimony_details:"You have provided me with a fantastic professional service right from the initial enquiry and now on a super affordable plan, I go ahead and transact with peace. We began with a phone call in which you developed an understanding of my business and how it operates. You then provided me with a draft set of terms which you went through with me point by point, to make sure that I fully understood the meaning of each clause. You offered me different options and gave me some great business advice so that I could make informed decisions.",
        testimony_details1:'You are truly a great part of my business success.',
        names:"Nkiru Ajah",
        job:"CNM Essentials & Utilities",
    
    },
    {
        id:2,
        thanksgiving:"We’ve been working with Unwana for over 3 years now, for legal advisory, to prepare the correct legal agreements for our expansion launch and she has been an invaluable support. What really impressed us was the time Unwana took to really understand our business, how we work and the style of our existing documentation. ",
        testimony_details:"She’s been a phone-call away to answer a field of questions, offering sound advice and has prepared an incredibly thorough agreement which protects both us and our franchisees. The staff of Evernall are friendly and knowledgeable and we’re looking forward to working with them again, to update our other business agreements in the future.",
        testimony_details1:'',
        names:"Aniedi Effiong ",
        job:"Cheapmoov Nigeria Limited ",
     
    },

    {
        id:3,
        thanksgiving:"At the commencement of our business, we engaged Evernall through the referral of a Client – best decision that I have ever made. We started right, because we got our Risk Map, for our kind of business, and with such dedication and precision, we were supplied with all our legal tools to succeed. You cannot imagine how this has positioned us for opportunities and helped us scale through hurdles we did not even imagine, could come up ",
        testimony_details:"This is saying thank you. Our T&C’s are always to the rescue. Your bespoke and swift services are Highly recommended!",
        testimony_details1:'',
        names:"Richard Ogbonna",
        job:"Brenhazy Nigeria Limited ",
   
    },

    {
        id:4,
        thanksgiving:"I was just at an Idea’s stage when I discussed with Evernall about my prospects. I was gently taken through the possibilities of my business and started, even as a Freelancer, with the Services of Evernall. This was a great decision, it turns out.",
        testimony_details:"Along the years, from my lease negotiations, to employment hurdles, to tendering and winning contracts to contract management at its finest, Evernall has truly come to the rescue. It is like having a trusted big brother or sister – you feel so free, you can bloom. I have expanded without any qualms and the peace of mind that this gives me is epic.",
        testimony_details1:'It is like having a trusted big brother or sister – you feel so free, you can bloom. I have expanded without any qualms and the peace of mind that this gives me is epic.',
        testimony_details2:"THANK YOU",
        names:"Prisca-Anne Nkwocha ",
        job:"Cents Supermarket",

    },
]
export class Testimony extends Component {  
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);        
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }
    render() {
        const testimony = {
            dots:false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true  ,
            draggable:false  ,
            cssEase:'linear'        
        }
        return (
            <div>
                <div className=" what-client-says text-center">
                   <div className="container text-center">
                    <h3 className="header-text text-center">
                    Review from our clients</h3>
                    <hr className="header-text-hr" />

                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12"></div>
                        <div className="col-lg-8 col-md-8 col-sm-12 slider-col">
                            <Slider ref={c=> (this.slider = c)} {...testimony} className="Slider slider-whatClientsays" >
                                {testimonial.map(testimony=>{
                                    return(
                                        <div className="" key={testimony.id}>
                                                <p className="">{testimony.thanksgiving}</p>
                                                <p className="">{testimony.testimony_details}</p>
                                                <div className="name">{testimony.names}</div>
                                                <div className="job">{testimony.job}</div>
                                        </div>
                                    )
                                })}
                            </Slider>
                            <div className="slider-arrow" style={{textAlign:'right'}}>
                                <button className="arrow-btn prev" onClick={()=>this.slider.slickPrev()}><BsArrowLeft  className="slider-arrow-left"/></button>
                                <button className="arrow-btn next" onClick={()=>this.slider.slickNext()}><BsArrowRight className="slider-arrow-right" /></button>
                            </div>
                    
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12"></div>
                    </div>              
                   </div>
               </div>

            </div>
        )
    }
}

export default Testimony
