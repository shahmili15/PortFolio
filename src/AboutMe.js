import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import About from "./About.jpg"
import './App.css'
class AboutMe extends React.Component {
    render(){
      return (

        <Grid className="contact-grid">
        <Cell col={6}>
          <p></p>
            <img
              src={About} alt='Mili' style={{width:'500px', hight:'1000px'}}/>
             <div className="banner-text">
                      <h1>Who am I?</h1>
                      </div>
              </Cell>
        <Cell col={6}>  <div className="aboutme">
            
                      <h1>About Me</h1>
                      </div>
                      
                      <div className="banner-text">
                      <p>I'm a UI Developer from SanJose, California</p>
                      <hr/>

                      <div className="banner-text">
                      <p>Since you're here, you probably want to know a bit more about me, eh?I enjoy turing complex problems into simple,beautiful and intuitive interface. I have specialized in HTML5, CSS3, JavaScript, React, jQuery , Sql and web development. I am graduted student from Robert morris university. My goal is to optain good entry-level job opprunity as UI (Frontend Developer). I have excellent communication skills and strong ability to work under pressure.
                           When I'm not coding ,you will find me in kitchen or in a swimming pool.
                     
                      </p>
                      </div>
                      </div>
                      
                      
                      </Cell>
        </Grid>
      );
    }
}

export default  AboutMe;