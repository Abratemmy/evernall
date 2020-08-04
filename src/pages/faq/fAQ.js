import React, { Component } from 'react';
import Otherpagesbg from '../otherpagesbg';
import './faq.css';

class FAQ extends Component {
    state={
        data:[
            {
                question:'Who are the people that can go into consulting?',
                answer:'anyone, so far the person have knowledge ',
            },
            {
                question:'Who are the people to consult?',
                answer:'There is no age barrier. You can give legal advise to anyone that walk up to you',
              
            },
    
            {
                question:"What are Evernall's operating hours?",
                answer:"We work from Monday to Friday. 9am - 4pm",
              
            },
            {
                question:"What makes Evernall different?",
                answer:"Our Solutions are practical and accessible and are tailored to meet real life situation that any business may face.",
               
            },
            {
                question:"How bespoke are the contract?",
                answer:"Our contracts are tailored to your business because we develop them collaboratively with you. There are no generic terms and if we’ve missed something you get two free edits. Don’t say we don’t treat you!",
             
            }    
        ],

        showInfo: false
    }

    HandleToggle=()=>{
        this.setState=({
            showInfo:!this.state.showInfo
        })
        
    }

    render() {
      
        return (
            <div>
                <Otherpagesbg title="FAQs" />
                <div className="accordion container">
                    {this.state.data.map((item, index)=>{
                        return (
                        <div key={index}>
                            <div className={this.state.showInfo ? "faq-ques active": 'faq-ques'} onClick={this.HandleToggle}>
                                {item.question} <br />
                                <i className="fas fa-plus"></i>
                            </div>

                            <div className={this.state.showInfo ? ' showContent content':'content'}>
                                <p>{item.answer}</p>
                            </div>
                            
                        </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default FAQ



