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

                <div className="container" style={{padding:'80px 0px 70px 0px'}}>
                    <div className="row" >
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service5_lorbtj.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <NavLink to='/service/corporatelegal' className="navlink">
                                <div className="service-banner">Corporate Legal Services
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service6_wla0ll.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <div className="service-banner">Legal/Contract Support Staff
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service2_lv2l72.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <div className="service-banner">Contract Drafting
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
      
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service4_d093wz.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <div className="service-banner">Contact Management
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service3_o3xxki.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <div className="service-banner">Legal Compliance Audit
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1595595017/Consulting/training_tszsmd.png" alt="not seen"
                                className="service-pics" width="100%" height="300"/>

                                <div className="service-banner">Training
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Service
