import React, { Component } from 'react';

import AllserviceProps from './allserviceProps';

export class Corporategovernance extends Component {
    render() {
        return (
            <div>
                <AllserviceProps  serviceprovided="Corporate Governance/Compliance" title="Corporate Governance/Compliance"
                    image="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service4_d093wz.jpg">
                   
                    <div className="each-service-page" >
                        <p>We offer Company Secretarial functions, fill your annual returns timely and generally keep your books to the extent that you are legally compliant and
                             can concentrate your efforts in building your business.

                        </p>
                    </div>
                          
                </AllserviceProps>
            </div>
        )
    }
}

export default Corporategovernance
