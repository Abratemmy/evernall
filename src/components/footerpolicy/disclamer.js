import React, { Component } from 'react';
import './footerpolicy.css';

export class Disclamer extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="header-text "> EVERNALL CONSULTING– Disclaimer</h3>

                <div className="footer-palava-list">
                    <ol>
                        <li>
                            <div className="disclaimer-title"> Introduction</div>
                            <div className="disclaimer-text">
                                This disclaimer governs your use of our website; by using our website, you accept this 
                                disclaimer in full. If you disagree with any part of this disclaimer, you must not use our
                              website.
                            </div>
                        </li>

                        <li>
                            <div className="disclaimer-title">Intellectual property rights</div>
                            <div className="disclaimer-text">
                            Unless otherwise stated, we or our licensors own the intellectual property rights in the 
                            website and material on the website. Subject to the licence below, all these intellectual 
                            property rights are reserved.
                            </div>
                        </li>

                        <li>
                            <div className="disclaimer-title">Licence to use website</div>
                            <div className="disclaimer-text">
                                You must not:
                                <div className="disclaimer-sublist">
                                    <ul>
                                        <li>Re-publish material from this website (including republication on another website);</li>
                                        <li>Sell, rent or otherwise sub-license material from the website;</li>
                                        <li>Show any material from the website in public for a commercial purpose and without your consent;</li>
                                        <li>Re-produce, duplicate, copy or otherwise exploit material on our website for a commercial purpose, gain or benefit without our express written consent;</li>
                                        <li>Edit or otherwise modify any material on the website; or</li>
                                        <li>Re-distribute material from this website.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="disclaimer-title">Limitation and exclusion of warranties and liability</div>
                            <div className="disclaimer-text">
                                <div className="disclaimer-sublist">
                                    <ul>
                                        <li>
                                            Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we 
                                            commit to ensuring that the website remains available or that the material on the website is kept up-to-date.
                                        </li>
                                        <li>
                                            To the maximum extent permitted by applicable law we exclude all representations, warranties and conditions relating to this website and the use of this website
                                            (including, without limitation, any warranties implied by law of the use of reasonable care and skill).
                                        </li>
                                        <li>
                                            Nothing in this disclaimer will: (a) limit or exclude our or your liability for death or personal injury resulting from negligence; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; (c) limit any of our or your liabilities in any way that is not permitted
                                            under applicable law; or (d) exclude any of our or your liabilities that may not be excluded under applicable law.
                                        </li>
                                        <li>
                                            The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, 
                                            including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
                                        </li>
                                        <li>
                                            To the extent that the information and services as described on the website are provided free-of-charge, we will not be liable for any loss or damage of any nature, including: We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control. We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill. We will not be liable to you in respect of any loss or corruption of any data, database or software. 
                                            We will not be liable to you in respect of any special, indirect or consequential loss or damage.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="disclaimer-title">Variation</div>
                            <div className="disclaimer-text">
                                We may revise this disclaimer from time-to-time. The revised disclaimer will apply to the use of our website from the date of the publication of the revised disclaimer on our website. 
                                Please check this page regularly to ensure you are familiar with the current version
                            </div>
                        </li>

                        <li>
                            <div className="disclaimer-title">Entire agreement</div>
                            <div className="disclaimer-text">
                                This disclaimer, together with our privacy policy and terms of use of our website, constitutes the entire agreement between you and us in relation to your use of our website,
                                and supersedes all previous agreements in respect of your use of this website.
                            </div>
                        </li>
                        
                        <li>
                            <div className="disclaimer-title">Law and jurisdiction</div>
                            <div className="disclaimer-text">
                                This disclaimer will be governed by and construed in accordance with the Laws of the Federal Republic of Nigeria, and any disputes 
                                relating to this disclaimer will be subject to the exclusive jurisdiction of the courts of Nigeria.
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Disclamer
