import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/homepage/home.js';
import About from '../pages/aboutpage/about.js';
import Contact from '../pages/contact/contact.js';
import Home1 from '../pages/homepage/home1.js';
import Service from '../pages/service/service.js';
import FAQ from '../pages/faq/fAQ.js';
import Corporatelegal from '../pages/service/corporatelegal.js';
import Contractdrafting from '../pages/service/contractdrafting.js';
import Contractmanagement from '../pages/service/contractmanagement.js';
import Contractsupport from '../pages/service/contractsupport.js';
import Training from '../pages/service/training.js';
import Blog from '../pages/blogpage/blog.js';

const Router = ()=>(
    <Switch>
        <Route exact path = '/evernall' component = {Home1} />
        <Route exact path = '/home' component = {Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path ='/service' component={Service} />
        <Route exact path ='/faq' component={FAQ} />
        <Route exact path ='/contact' component={Contact} />
        <Route exact path ='/blog/:postId' component={Blog} />
        <Route exact path ='/blog/1' component={Blog} />
        {/* route for all services */}
        <Route exact path='/service/corporatelegal' component={Corporatelegal} />
        <Route exact path='/service/contract_drafting' component={Contractdrafting} />
        <Route exact path='/service/contract_management' component={Contractmanagement} />
        <Route exact path='/service/contract_support' component={Contractsupport} />
        <Route exact path='/service/training' component={Training} />
        

        
    </Switch>
)
export default Router