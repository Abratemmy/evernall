import React, { Component } from 'react';
import './about.css';
import WOW from 'wowjs';


export class About extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        return (
            <div >
                <div className="">
                   <div className="container-fluid about-background text-center">
                       <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">About us</h1>
                   </div>

                   <div className="container">
                        <h3 className="header-text text-center"> What we stand for</h3>
                        <hr className="header-text-hr" />

                        <div className="row">
                            <div className="col-lg-8" >
                                <div className=""style={{padding:'0px 40px 0px 40px'}}>
                                    <h4>We are Pioneers</h4>
                                </div>
                                
                            </div>
                            <div className="col-lg-4">hbhjg</div>
                        </div>
                   </div>
                </div>
               
                
            </div>
        )
    }
}

export default About
