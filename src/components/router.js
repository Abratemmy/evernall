import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/homepage/home.js';
import About from '../pages/aboutpage/about.js';
import Contact from '../pages/contact/contact.js';
import Home1 from '../pages/homepage/home1.js';
import Service from '../pages/service/service.js';
import FAQ from '../pages/faq/fAQ.js';

const Router = ()=>(
    <Switch>
        <Route exact path = '/evernall' component = {Home1} />
        <Route exact path = '/home' component = {Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path ='/service' component={Service} />
        <Route exact path ='/faq' component={FAQ} />
        <Route exact path ='/contact' component={Contact} />
        
    </Switch>
)
export default Router