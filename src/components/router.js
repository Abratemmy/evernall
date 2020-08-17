import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/homepage/home.js';
import About from '../pages/aboutpage/about.js';
import Contact from '../pages/contact/contact.js';
import Home1 from '../pages/homepage/home1.js';
import Service from '../pages/service/service.js';
import Faqs from '../pages/faq/faqs.js';

import Contractdrafting from '../pages/service/contract_drafting.js';
import Businessentity from '../pages/service/business_entity.js';
import Intellectualproperty from  '../pages/service/intellectual_property.js';
import Corporategovernance from '../pages/service/corporate_governance.js';

import Training from '../pages/service/training.js';
import Blog from '../pages/blogpage/blog.js';
import Whyuseus from '../pages/aboutpage/whyuseus.js';
import Testimonial from '../pages/aboutpage/Testimonial.js';
import Businesslegal from '../pages/service/business_legal.js';

const Router = ()=>(
    <Switch>
        <Route exact path = '/evernall' component = {Home1} />
        <Route exact path = '/home' component = {Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path ='/service' component={Service} />
        <Route exact path ='/faq' component={Faqs} />
        <Route exact path ='/contact' component={Contact} />
        <Route exact path ='/blog/:postId' component={Blog} />
        <Route exact path ='/blog/1' component={Blog} />

        {/* route for all services */}
        <Route exact path='/service/business-entity' component={ Businessentity} />
        <Route exact path='/service/contract-drafting' component={Contractdrafting} />
        <Route exact path='/service/intellectual-property' component={Intellectualproperty} />
        <Route exact path='/service/corporate-governance' component={Corporategovernance} />
        <Route exact path='/service/training' component={Training} />
        <Route exact path='/service/general-business-legal-support' component={Businesslegal} />

        {/* route for aboutpage */}
        <Route exact path ='/about/whyuseus' component={Whyuseus} />
        <Route exact path ='/about/testimonial' component={Testimonial} />
        

        
    </Switch>
)
export default Router