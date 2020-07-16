import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/homepage/home.js';
import About from '../pages/aboutpage/about.js';
import Contact from '../pages/contact.js';
import Home1 from '../pages/homepage/home1.js';
import Service from '../pages/service/service.js';

const Router = ()=>(
    <Switch>
        <Route exact path = '/evernall' component = {Home1} />
        <Route exact path = '/evernall/home' component = {Home} />
        <Route exact path ='/evernall/about' component={About} />
        <Route exact path ='/evernall/service' component={Service} />
        <Route exact path ='/evernall/contact' component={Contact} />
        
    </Switch>
)
export default Router