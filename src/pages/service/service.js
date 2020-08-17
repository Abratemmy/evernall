import React, { Component } from 'react';
import {IoIosArrowRoundForward} from 'react-icons/io';
import './service.css';
import Otherpagesbg from '../otherpagesbg';
import { NavLink } from 'react-router-dom';


export class Service extends Component {
    render() {
        return (
            <div>
                <Otherpagesbg title="Our Services" />

                <div className="container" style={{padding:'0px 0px 70px 0px'}}>
                    <h3 className="header-text text-center">Services we provided</h3>
                    <p style={{textAlign:'justify', lineHeight:'30px', paddingBottom:'20px'}}>Our Services are featured in the various Business Phases and tailored made for various types of Entrepreneurs – Start-ups, Freelancers, Small/Medium Businesses, Charities and Large Corporations. We offer the whole range of Services 
                        under our retainership package and can send in temporary staff to assist for fixed durations.
                    </p>
                    <div className="row" >
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service5_lorbtj.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <NavLink to='/service/contract-drafting' className="navlink">
                                <div className="service-banner">Contract Drafting/Negotiation
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service6_wla0ll.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <NavLink to='/service/business-entity' className="navlink">
                                    <div className="service-banner">Business Entity Formation/Advisory
                                        <IoIosArrowRoundForward className="service-icon"/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service2_lv2l72.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <NavLink to='/service/intellectual-property' className="navlink">
                                    <div className="service-banner">Intellectual Property
                                        <IoIosArrowRoundForward className="service-icon"/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
      
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service4_d093wz.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <NavLink to='/service/corporate-governance ' className="navlink">
                                    <div className="service-banner">Corporate Governance/Compliance 
                                        <IoIosArrowRoundForward className="service-icon"/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service3_o3xxki.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>
                                
                                <NavLink to='/service/general-business-legal-support' className="navlink">
                                    <div className="service-banner">General Business Legal Support
                                        <IoIosArrowRoundForward className="service-icon"/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1595595017/Consulting/training_tszsmd.png" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <NavLink to='/service/training' className="navlink">
                                    <div className="service-banner"> Contract Management Services/Training
                                        <IoIosArrowRoundForward className="service-icon"/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Service
