// import React, { Component } from 'react';

// const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum solutasuscipit facere nisi sed earum repellendus fuga debitis,nam molestiae minima voluptates possimus.'

// const data = [
//   {
//     title: 'Pricing plans',
//     paragraph
//   },
//   {
//     title: 'How to apply',
//     paragraph
//   },
//   {
//     title: 'Purchasing process',
//     paragraph
//   },
//   {
//     title: 'Usage guides',
//     paragraph
//   }
// ]

// export class fAQ extends Component {
//     render() {
//         return (
//             <div>
//                 <div {...{ className: 'wrapper' }}>
//         <ul {...{ className: 'accordion-list' }}>
//           {data.map((data, key) => {
//             return (
//               <li {...{ className: 'accordion-list__item', key }}>
//                 <AccordionItem {...data} />
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//             </div>
//         )
//     }
// }

// export default fAQ



// // import React, {useState} from 'react';
// // import './faq.css'

// // function FAQ() {

// //     const [faqs, setfaqs] = useState([
// //         {
// //             question: 'How is life?',
// //             answer:'life is good',
// //             open: true
// //         },
// //         {
// //             question: 'How is life?',
// //             answer:'life is good',
// //             open: false
// //         },
// //         {
// //             question: 'How is life?',
// //             answer:'life is good',
// //             open: false
// //         }
// //     ]);

// //     const toggleFAQ = index => {
// //         setfaqs(faqs.map((faq, i) =>{
// //             if (i === index){
// //                 faq.open = !faq.open
// //             } else {
// //                 faq.open = false
// //             }
// //         }))
// //     }
// //     return (
// //         <div className="faqpage">
// //             <div className="container-fluid about-background text-center">
// //                 <h1 className="otherpages-title wow animate__slideInUp"  data-wow-duration="2s">FAQ</h1>
// //             </div>

// //             <div className="faqs" style={{padding: '60px 0px 80px 0px'}}>
// //                 {faqs.map((faq, i) => (
// //                     <div className={"faq" + (faq.open ? 'open' : '')}    key={i} onClick={() => toggleFAQ(i)}> 

// //                         <div className="faq-question">
// //                             {faq.question}
// //                         </div>

// //                         <div className="faq-answer">
// //                             {faq.answer}
// //                         </div>
                        
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }

// // export default FAQ

import React, { Component } from 'react'

export class fAQ extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default fAQ

