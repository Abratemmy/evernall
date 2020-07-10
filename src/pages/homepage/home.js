import React, { Component } from 'react'
import './home.css';
import Typical from 'react-typical';
import {NavLink}  from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-7 home-background">
                            <h1>LEGAL FOR {' '}
                                <Typical 
                                loop={Infinity}
                                wrapper="b"
                                className="background-typical"
                                steps={[
                                    'BUSINESS',
                                    1000,
                                    'STARTUPs',
                                    1000,
                                    'SCALEUPs',
                                    1000,
                                    'CLEANTECH',
                                    1000,
                                    'SMEs',
                                    1000,
                                    'TECH',
                                    1000,
                                    'E-COMMERCE',
                                    1000,
                                ]}
                                />
                            </h1>

                            <div className="background-text">Your ultimate law & legal solution</div>

                            <div className="nav-link">
                                <NavLink to="/book-a-call" className="button-primary">Book a call</NavLink>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 home-background ">
                            <img src="https://res.cloudinary.com/aitechma/image/upload/v1593610363/Consulting/background_vlwrv4.png" alt="cannot seen"
                            className="background-img" width="100%" height="300" />
                        </div>
                    </div>
                </div>

               
                {/* another section starts here */}
                <div className="container">
                    <h2 className="text-center">Practice Area</h2>
                    <div  className="text-center header-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
                </div>
                
                
            </div>
        )
    }
}

export default Home
