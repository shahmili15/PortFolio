import React from 'react';

import './App.css';
import Mili from './Mili.jpg'
import {Grid ,Cell} from 'react-mdl';
class Home extends React.Component{
    render(){
        return (
        <div style={{width:'100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                  <img src={Mili} className="avatar-img"  alt='Mili' ></img>
                  <div className="banner-text">
                      <h1>Full Stack Web developer</h1>
                      <hr/>
                      <p>HTML/Css/JavaScript/React/NodeJs/SQL/PHP/WordPress</p>
                      <div className="social-links">
                          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-linkedin-square" aria-hidden="true"/>
                          </a>
                          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-github-square" aria-hidden="true"/>
                          </a>
                          </div>
                      </div>
              </Cell>
            </Grid>
            
            </div>
        );
    }
}

export default Home;