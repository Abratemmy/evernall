import React, { Component } from 'react';
import AllserviceProps from './allserviceProps';

export class Training extends Component {
    render() {
        return (
            <div>
                <AllserviceProps serviceprovided="Contract Management Services/Training" title="Contract Management Services/Training"
                  image="https://res.cloudinary.com/aitechma/image/upload/v1595595017/Consulting/training_tszsmd.png">
                    

                    <div className="each-service-page" >
                        <p>
                        We offer cradle- to -grave Contract Management Solutions, you do not just have sign off contracts lying around unenforced and unmonitored. Our solutions provide safe repository
                         for contracts, monitoring triggers up till payment and close out and online/onsite training options for your Staff on contract monitoring best practice.
                        </p>
                    </div>
                </AllserviceProps>
            </div>
        )
    }
}

export default Training
