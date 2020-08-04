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
                <ul>
                    {items.map(item =>(
                        <li key={item.id}>
                            Name:{item.name}  |  Email: {item.email}
                        </li>
                    )
                        )}
                </ul>
        
            </div>
        )
    }
}

export default Apiexample
