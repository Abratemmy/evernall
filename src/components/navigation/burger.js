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
  @media(max-width: 760px){
      transform: ${({open}) => open ? 'translate(0)' : 'translateX(100%)'}
    
  }
`
const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger className="burger" open={open} onClick={()=>setOpen (!open)}>
                <div className="burgerdiv"></div>
                <div className="burgerdiv"></div>
                <div className="burgerdiv"></div>
            </StyledBurger>
            <div>
                
               <UL open={open}>
                   <li><NavLink to ="/evernall" className="nav-link">Home</NavLink> </li>
                   <li><NavLink to ="/about" className="nav-link">About Us</NavLink></li>
                   <li><NavLink to ="/practicearea" className="nav-link">Services</NavLink></li>
                   <li><NavLink to ="/blog" className="nav-link">Blog</NavLink></li>
                   <li><NavLink to ="/contact" className="nav-link">Contact Us</NavLink></li>
               </UL></div>
        </>
    )
}

export default Burger
