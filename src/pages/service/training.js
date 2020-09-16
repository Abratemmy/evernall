import React, { Component } from 'react';
import AllserviceProps from './allserviceProps';

export class Training extends Component {
    render() {
        return (
            <div>
                <AllserviceProps serviceprovided="Contract Management Services/Training" title="Contract Management Services/Training"
                  image="https://res.cloudinary.com/aitechma/image/upload/v1600250799/Consulting/training_wgtctv.png">
                    

                    <div className="each-service-page" >
                        <p>
                        We offer cradle-to-grace Contract Management Solutions for the success of your business transactions. With us, you will no longer have 
                        your signed off contracts lying around, unmonitored and unmanaged.</p>

                        <p> Our solutions provide a safe repository for your contracts, create monitoring triggers to
                          ensure you get paid on time and we also provide online and onsite contract drafting and contract management training to your personnel.
                        </p>
                    </div>
                </AllserviceProps>
            </div>
        )
    }
}

export default Training
