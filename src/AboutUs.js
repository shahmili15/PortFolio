import React from 'react';

import './App.css';
import Particles from 'react-particles-js';
const particlesOpt={
    particles: {
      number:{
          value: 350,
          density:{
              enable:true,
              value_area:1000
          }
        
      }

}
}
class AboutUs extends React.Component{
    render(){
        return (
            <div className="about">
              
            <Particles 
              params={particlesOpt}
  />
              
              </div>
              
        );
    };
}

export default AboutUs;