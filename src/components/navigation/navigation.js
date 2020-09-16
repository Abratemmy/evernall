import React, { Component } from 'react';
import './navigation.css';
import Burger from './burger';
import { NavLink } from 'react-router-dom';
import {IoIosCall} from "react-icons/io";
import {MdEmail} from "react-icons/md";


export class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            scrolled: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY < 100;
            if (isTop !== true){
                this.setState({scrolled: true});
            } else{
                this.setState({scrolled: false})
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <div className="">
                <div className="nav-hidden-when-scrolled">
                    <div className="nav-hidden-items container">
                        <ul>
                            <li><span className="nav-icon"><IoIosCall /></span>+234 907 838 0989 , +234 810 129 6309</li>
                            <li><span className="nav-icon"><MdEmail /></span>info@evernall.com</li>
                        </ul>
                    </div>
                </div>

                <div className={this.state.scrolled ?'nav scrolled': 'nav'}>
                    <div className="navbar container">
                        <div className="logo">
                            <NavLink to ='/evernall'><img src = "https://res.cloudinary.com/aitechma/image/upload/v1594653204/Consulting/evernall_logo_kqv2lx.jpg" 
                            alt="evernall logo" width="100%" height="50" className="img-logo"/></NavLink> 
                        </div>

                        
                        <Burger />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation
