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
                   <li><NavLink to ="/evernall" exact  className="nav-link"activeStyle={{color: '#150365', fontWeight: 'bold'}}>Home</NavLink> </li>
                   <li><NavLink to ="/evernall/about" exact className="nav-link"activeStyle={{color: '#150365', fontWeight: 'bold'}}>About Us</NavLink></li>
                   <li><NavLink to ="/evernall/service"exact className="nav-link"activeStyle={{color: '#150365', fontWeight: 'bold'}}>Services</NavLink></li>
                   <li><NavLink to ="/evernall/blog" exact className="nav-link"activeStyle={{color: '#150365', fontWeight: 'bold'}}>Blog</NavLink></li>
                   <li><NavLink to ="/evernall/contact" exact className="nav-link"activeStyle={{color: '#150365', fontWeight: 'bold'}}>Contact Us</NavLink></li>
               </UL></div>
        </>
    )
}

export default Burger