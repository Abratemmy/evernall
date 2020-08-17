import React, { Component } from 'react';
import AllserviceProps from './allserviceProps';

export class Contractdrafting extends Component {
    render() {
        return (
            <div>
                <AllserviceProps  serviceprovided="Contract Drafting Service" title="Contract Drafting"
                    image="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service5_lorbtj.jpg">
                   
                    <div className="each-service-page" >
                        <p>
                        With our robust commercial background, we can draft and negotiate water -tight and easy to monitor Contracts, that will help you create better deals and avoid disputes. We will draft, review, and
                            negotiate contracts with your employees, contractors, partners, clients, and more.
                        </p>

                        <p>We can build Contract Template Suite (with guidance notes) specific to your business, and for your use in various circumstances. 
                            That way you are prepared to engage services at the shortest possible notice.</p>
                    </div>
                          
                </AllserviceProps>
            </div>
        )
    }
}

export default Contractdrafting
