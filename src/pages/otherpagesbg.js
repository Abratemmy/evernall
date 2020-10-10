import React, { Component } from 'react';
import WOW from 'wowjs';


export class Otherpagesbg extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();   
        
       
   }
    render(title, subtitle) {
        return (
            <div className="">
                <div className="about-background text-center">
                    <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">{this.props.title}</h1>
                    <div className="otherpages-subtitle wow animate__fadeInUp">{this.props.subtitle}</div>
                </div>
            </div>
        )
    }
}

export default Otherpagesbg
