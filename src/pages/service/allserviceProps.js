import React from 'react';
import { NavLink } from 'react-router-dom';
import Otherpagesbg from '../otherpagesbg';


function AllserviceProps({children, title, subtitle, serviceprovided}) {
    return (
        <div className="">
            <Otherpagesbg title="Services" subtitle={subtitle}/>
            <div className="container" style={{padding:'70px 0px 60px 0px'}}>
                <div className="row">
                    <div className="col-lg-8 col-md-8  order-md-8">
                        {children}
                    </div>

                    <div className="col-lg-4 col-md-4 order-md-4">                   
                        <div className="allserviceslinks">
                            <ul>
                                <li exact="true"><NavLink to='/service/corporatelegal' exact className="serviceslinks">Corporate Legal Services</NavLink></li>
                                <li exact="true"><NavLink to='/service/contract_support' exact className="serviceslinks">Legal/Contract Support Staffing</NavLink></li>
                                <li><NavLink to='/service/compliant-audit' exact className="serviceslinks">Legal/Process Compliance Audit</NavLink></li>
                                <li><NavLink to='/service/contract_drafting'exact className="serviceslinks">Contract Drafting/Negotiation</NavLink></li>
                                <li><NavLink to='/service/contract_management'exact className="serviceslinks">Contract Management</NavLink></li>
                                <li><NavLink to='/service/training' exact className="serviceslinks">Training (Online and Onsite)</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="allservice-footer">
                <div className="container allcontainer">
                    <div className="allservice-footer-text">To find out more about how our {serviceprovided} can help protect
                     and promote your business, call us today on <span className="allservice-footer-text-span">+234 815 949 1814 </span> 
                      or <span className="allservice-footer-text-span">info@evernall.com </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllserviceProps
