import React, { Component } from 'react';
import AllserviceProps from './allserviceProps.js'

export class Businesslegal extends Component {
    render() {
        return (
            <div>
                 <AllserviceProps serviceprovided="Business Legal Suppport" title="General Business Legal Support"
                  image="https://res.cloudinary.com/aitechma/image/upload/v1598347690/Consulting/general_dyesdm.png">
                    

                    <div className="each-service-page" >
                        <p>
                        We can help you select the right type of business to form, get you 
                        registered with the Corporate Affairs Commission and draft all your governing/business process documents
                        </p>
                    </div>
                </AllserviceProps>
            </div>
        )
    }
}

export default Businesslegal
