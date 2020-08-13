import React, { Component } from 'react'

export class Apiexample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[],
             isloaded: false,
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(json => {
            this.setState({
                isloaded:true,
                items:json,
            })
        })
    }
    
    render() {
        var {isloaded, items} = this.state;
        if (!isloaded){
            return <div>loading ....</div>
        }
        return (
            <div>
                {/* <ul> */}
                <div className="row">
                    <div className="col-lg-6">
                        {items.map(item =>(
                            <div className="">
                               
                                    Name:{item.name}  |  Email: {item.email}
                             
                            </div>
                            )
                            )}
                    </div>
                </div>
                 
        
            </div>
        )
    }
}

export default Apiexample
