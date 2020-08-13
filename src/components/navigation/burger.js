import React, { useState} from 'react';
import styled from 'styled-components';

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
            <StyledBurger className="burger " open={open} onClick={()=>setOpen (!open)}>
                <div className="burgerdiv"></div>
                <div className="burgerdiv"></div>
                <div className="burgerdiv"></div>
            </StyledBurger>
            <div>
                
               <UL open={open}>
                   <li><NavLink to ="/evernall" exact  className="nav-link">Home</NavLink> </li>
                   <li><NavLink to ="/about" exact className="nav-link .nav-linkdrop">About Us
                        </NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/about/whyuseus" className=" service-dropdown afirst ">Why use us</NavLink>
                            <NavLink to="/about/testimonial" className=" service-dropdown">Testimonial</NavLink>
                        </div>
                        
                    </li>
                   <li><NavLink to ="/service"exact className="nav-link .nav-linkdrop">
                       Services</NavLink>
                       <div className="dropdown-content">
                            <NavLink to="/service/corporatelegal" className=" service-dropdown afirst ">Corporate Legal Services</NavLink>
                            <NavLink to="/service/contract_support" className=" service-dropdown">Legal/Contract Support Staffing</NavLink>
                            <NavLink to="/service/contract_drafting"className=" service-dropdown">Contract drafting/Negotiation</NavLink>
                            <NavLink to="/service/contract_management"className=" service-dropdown">Contract Management </NavLink>
                            <NavLink to="/service/legal_compliance"className=" service-dropdown">Legal/Process Compliance Audit</NavLink>
                            <NavLink to="/service/training"className=" service-dropdown">Training (Online and Onsite)</NavLink>
                        </div>
                       
                    </li>
                   <li><NavLink to ="/blog/law-order" exact className="nav-link">Blog</NavLink></li>
                   <li><NavLink to ="/faq"exact className="nav-link">FAQ</NavLink></li>
                   <li><NavLink to ="/contact" exact className="nav-link">Contact Us</NavLink></li>
               </UL></div>
        </>
    )
}

export default Burger
