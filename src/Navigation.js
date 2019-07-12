import React from 'react';
import Home from './Home.js'
import AboutUs from './AboutUs.js'
import Contact from './Contact.js'
import Resume from './resume.js'
import './Navigation.css'
import {BrowserRouter as Router, Link,NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import './App.css';

class Navigation extends React.Component{
    render() {
        return (
            
          <Router>
        <nav>
          <h1 className="heading">{this.props.logoTitle}</h1> 
              <ul>
                  <li><NavLink to="/" exact activeStyle={
                      { borderBottom:'2px'    , borderBottomColor:'white'}
                  } >Home</NavLink > </li>
                  <li><NavLink to="/AboutUs" exact activeStyle={
                      {color:'green'}
                  } >About</NavLink > </li>
                  <li><NavLink to="/Contact" exact activeStyle={
                      {color:'green'}
                  } >Contact</NavLink > </li>
                  <li><NavLink to="/resume" exact activeStyle={
                      {color:'green'}
                  } >Resume</NavLink > </li>
                   
             </ul> 
             </nav>
                  <Route path="/" exact strict render={
                      () => {
                          return (<Home />)
                      }
                    }/>
                     <Route path="/AboutUs" exact strict render={
                      () => {
                          return (<AboutUs />)
                      }
                    }/>
                     <Route path="/Contact" exact strict render={
                      () => {
                          return (<Contact />)
                      }
                    }/>
                     <Route path="/resume" exact strict render={
                      () => {
                          return (<Resume />)
                      }
                    }/>
                           
            
    
          </Router>
         
    
        );
      }
    }
export default Navigation;

import React from 'react';

import './App.css';
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">

     <Navigation logoTitle="React Portfolio" />
    </div>
  );
}

export default App;