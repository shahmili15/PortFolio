import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Resume from './resume.js';
const Main= () => (
    <Switch>
       <Route exact path="/" component={Home} />  
       <Route exact path="/AboutMe" component={AboutMe} />  
       <Route exact path="/Contact" component={Contact} />  
       <Route exact path="/Resume" component={Resume} />  
    </Switch>
)

export default Main;