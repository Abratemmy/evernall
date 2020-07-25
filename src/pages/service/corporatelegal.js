import React, { Component } from 'react';

import AllserviceProps from './allserviceProps';

export class Corporatelegal extends Component {
    render() {
        return (
            <div>
                <AllserviceProps subtitle="Corporate Legal Services" serviceprovided="Corporate Legal Service">
                    <div className="">
                    <img src="https://res.cloudinary.com/aitechma/image/upload/v1594828051/Consulting/service5_lorbtj.jpg" alt="not seen"
                                className="service-pics" width="100%" height="300"/>
                    </div>
                </AllserviceProps>
            </div>
        )
    }
}

export default Corporatelegal
