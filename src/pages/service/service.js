import React, { Component } from 'react';
import {IoIosArrowRoundForward} from 'react-icons/io';
import './service.css';
import WOW from 'wowjs';


export class Service extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        return (
            <div>
               <div className="container-fluid about-background text-center">
                    <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">Our Services</h1>
                </div>

                <div className="container" style={{padding:'80px 0px 70px 0px'}}>
                    <div className="row" >
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service1_fl6vgi.jpg" alt="not seen"
                                className="service-pics" width="100%"/>

                                <div className="service-banner">Family Law
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service6_wla0ll.jpg" alt="not seen"
                                className="service-pics" width="100%"/>

                                <div className="service-banner">Federal Crimes
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service2_lv2l72.jpg" alt="not seen"
                                className="service-pics" width="100%"/>

                                <div className="service-banner">Education Law
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
      
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service4_d093wz.jpg" alt="not seen"
                                className="service-pics" width="100%"/>

                                <div className="service-banner">Real Estate Law
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service3_o3xxki.jpg" alt="not seen"
                                className="service-pics" width="100%"/>

                                <div className="service-banner">Domestic Violence
                                    <IoIosArrowRoundForward className="service-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="service-column">
                                <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service5_lorbtj.jpg" alt="not seen"
                                className="service-pics" width="100%"/>

                                <div className="service-banner">Security Law
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
