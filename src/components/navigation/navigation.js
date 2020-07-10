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
            const isTop = window.scrollY < 10;
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
                   Evernall
               </div>

                <Burger />
                
            </div>
            </div>
        )
    }
}

export default Navigation
