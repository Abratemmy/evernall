import React, { Component } from 'react';
import './navigation.css';
import Burger from './burger';
import { NavLink } from 'react-router-dom';


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
            <div className={this.state.scrolled ?'nav scrolled': 'nav'}>
            <div className="navbar container">
               <div className="logo">
                   <NavLink to ='/evernall'><img src = "https://res.cloudinary.com/aitechma/image/upload/v1594653204/Consulting/evernall_logo_kqv2lx.jpg" 
                   alt="evernall logo" width="100%" height="50" className="img-logo"/></NavLink> 
               </div>

                <Burger />
                
            </div>
             </div>
        )
    }
}

export default Navigation
