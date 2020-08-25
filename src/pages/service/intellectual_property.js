import React, { Component } from 'react';
import AllserviceProps from './allserviceProps';

export class Intellectualproperty extends Component {
    render() {
        return (
            <div>
                <AllserviceProps serviceprovided="Intellectual property" title="Intellectual Property"
                  image="https://res.cloudinary.com/aitechma/image/upload/v1598347687/Consulting/intellectual_ekzu8s.png">
                    

                    <div className="each-service-page" >
                        <p>
                        Your intellectual property (IP) is one of your most valuable assets. We can help you identify
                         your IP is, teach you how to protect it, file applications with the Nigerian Trademark Office, and more.
                        </p>
                    </div>
                </AllserviceProps>
            </div>
        )
    }
}

export default Intellectualproperty
