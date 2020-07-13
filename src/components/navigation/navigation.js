import React, { Component } from 'react';
import './navigation.css';
import Burger from './burger';

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
                   <img src = "https://res.cloudinary.com/aitechma/image/upload/v1594641593/Consulting/evernallogo_nxyc4j.jpg" 
                   alt="hi" width="40%" height="60" />
               </div>

                <Burger />
                
            </div>
             </div>
        )
    }
}

export default Navigation
