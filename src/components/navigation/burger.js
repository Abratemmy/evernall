import React, { useState} from 'react';
import styled from 'styled-components';
import {FaFacebookF} from 'react-icons/fa';

import {NavLink} from 'react-router-dom';


// note that the div in the style.div represent the div inside styled burger with classname burgerdiv.
const StyledBurger = styled.div`
  div{
    background-color: ${({open}) => open ? '#ccc' : '#333'};
    transform-origin: 1px;
    transition: all 0.3s linear;


    &:nth-child(1){
        transform:${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
    }

    &:nth-child(2){
        transform:${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open? 0 :1};
    }

    &:nth-child(3){
        transform:${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`
const UL = styled.ul`
  @media(max-width: 1000px){
      transform: ${({open}) => open ? 'translate(0)' : 'translateX(100%)'}
    
  }
`
const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger className="burger " open={open} onClick={()=>setOpen (!open)} >
                <div className="burgerdiv"></div>
                <div className="burgerdiv"></div>
                <div className="burgerdiv"></div>
            </StyledBurger>
            <div >
                
               <UL open={open}>
                   <li><NavLink to ="/evernall" exact  className="nav-link">Home</NavLink> </li>
                   <li className="dropbtn"><NavLink to ="/about" className="nav-link .nav-linkdrop">About Us
                    <span className="small-device-icon-dropdown"><FaFacebookF /></span>
                        </NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/about/whyuseus" className=" service-dropdown afirst ">Our Team</NavLink>
                            <NavLink to="/about/testimonial" className=" service-dropdown">Testimonial</NavLink>
                        </div>
                        
                    </li>
                   <li><NavLink to ="/service" className="nav-link .nav-linkdrop">
                       Services</NavLink>
                       <div className="dropdown-content">
                            <NavLink to='/service/contract-drafting' exact className="service-dropdown afirst">Contract Drafting/Negotiation</NavLink>
                            <NavLink to='/service/business-entity' exact className="service-dropdown">Business Entity Formation/Advisory</NavLink>
                            <NavLink to='/service/intellectual-property' exact className="service-dropdown">Intellectual Property</NavLink>
                            <NavLink to='/service/corporate-governance' exact className="service-dropdown">Corporate Governance/Compliance </NavLink>
                            <NavLink to='/service/training'exact className="service-dropdown">Contract Management Services/Training</NavLink>
                            <NavLink to='/service/general-business-legal-support' exact className="service-dropdown">General Business Legal Support</NavLink>
                        </div>
                       
                    </li>
                   {/* <li><NavLink to ="/blog/law-order" exact className="nav-link">Blog</NavLink></li> */}
                   <li><NavLink to ="/faq"exact className="nav-link">FAQ</NavLink></li>
                   <li><NavLink to ="/contact" exact className="nav-link">Contact Us</NavLink></li>
               </UL></div>
        </>
    )
}

export default Burger
