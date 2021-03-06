import React, { Component } from 'react'
import AllserviceProps from './allserviceProps'

export class Businessentity extends Component {
    render() {
        return (
            <div>
                <AllserviceProps serviceprovided="Business Entity Formation/Advisory" title="Business Entity Formation"
                  image="https://res.cloudinary.com/aitechma/image/upload/v1598347709/Consulting/business-entity_x9oyzb.png">
                    

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

export default Businessentity
