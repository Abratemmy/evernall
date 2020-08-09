import React, { useState } from 'react';
import './faq.css';

function Faqs(index) {

    const [faqs,setfaqs] = useState([

        {
            question:'Who are the people that can go into consulting?',
            answer:'anyone, so far the person have knowledge ',
            open:false
        },
        {
            question:'Who are the people to consult?',
            answer:'There is no age barrier. You can give legal advise to anyone that walk up to you',
            open:false
        },

        {
            question:"What are Evernall's operating hours?",
            answer:"We work from Monday to Friday. 9am - 4pm",
            open:false
        },
        {
            question:"What makes Evernall different?",
            answer:"Our Solutions are practical and accessible and are tailored to meet real life situation that any business may face.",
            open:false
        },
        {
            question:"How bespoke are the contract?",
            answer:"Our contracts are tailored to your business because we develop them collaboratively with you. There are no generic terms and if we’ve missed something you get two free edits. Don’t say we don’t treat you!",
            open:false
        }    

    ]);

    const toggleFAQ = (index) => {
        setfaqs (faqs.map((faq, i)=>{
            if (i === index){
                faq.open = !faq.open
            }
            else{
                faq.open =false;
            }

            return faq;
        }))
    }
    return (
        <div className="Appi">
            <div className="faqs" >
                {faqs.map((faq, i) =>(
                    <div className="faq">
                    <div className={faq.open ? 'open' :'' } key={index} onClick = {() => toggleFAQ(i)}>
                        <div className="faq-question" >
                            {faq.question}
                        </div>

                        <div className="faq-answer">
                     {faq.answer}
                    </div>

                    </div>
                     
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Faqs
