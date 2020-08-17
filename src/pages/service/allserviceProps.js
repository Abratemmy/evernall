import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Otherpagesbg from '../otherpagesbg';


function AllserviceProps({children, serviceprovided, title, image}) {
    return (
        <div className="">
            {/* <Otherpagesbg title="Services" subtitle={subtitle}/> */}
            {/* <div className="container" style={{padding:'70px 0px 60px 0px'}}>
                <div className="row">
                    <div className="col-lg-8 col-md-8  order-md-8">
                        {children}
                    </div>

                    <div className="col-lg-4 col-md-4 order-md-4">                   
                        <div className="allserviceslinks">
                            <ul>
                                <li exact="true"><NavLink to='/service/contract-drafting' exact className="serviceslinks">Contract Drafting/Negotiation</NavLink></li>
                                <li exact="true"><NavLink to='/service/business-entity' exact className="serviceslinks">Business Entity Formation/Advisory</NavLink></li>
                                <li><NavLink to='/service/intellectual-property' exact className="serviceslinks">Intellectual Property</NavLink></li>
                                <li><NavLink to='/service/corporate-governance' exact className="serviceslinks">Corporate Governance/Compliance </NavLink></li>
                                <li><NavLink to='/service/training'exact className="serviceslinks">Contract Management Services/Training</NavLink></li>
                                <li><NavLink to='/service/General-business-legal-support' exact className="serviceslinks">General Business Legal Support</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="container" style={{padding:'70px 0px 60px 0px'}}>
                {children}
            </div> */}
            <div className="" style={{marginTop:'40px', backgroundColor:'#ebe6e6'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 aboutdropdown-testimonial">
                            <h3 className="aboutdropdown-title">{title}</h3>
                            <hr className="footer-hr whyuse-hr" style={{width:'20%'}}/>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="container" style={{padding:'40px 0px 40px 0px'}}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {children}
                    </div>
               
                    <div className="col-lg-6">
                        <img src={image} alt="not seen" width="100%" height="350" />
                    </div>
                </div>


                
            </div>

            <div className="allservice-footer">
                <div className="container allcontainer">
                    <div className="allservice-footer-text">To find out more about how our {serviceprovided} can help protect
                     and promote your business, call us today on <span className="allservice-footer-text-span">+234 907 838 0989 ,  +234 810 129 6309 </span> 
                      or <span className="allservice-footer-text-span">info@evernall.com </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllserviceProps
