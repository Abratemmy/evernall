import React, { Component } from 'react';
import WOW from 'wowjs';

export class Contact extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        return (
            <div>
                <div className="container-fluid about-background text-center">
                    <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">Contact Us</h1>
                </div>
            </div>
        )
    }
}

export default Contact
