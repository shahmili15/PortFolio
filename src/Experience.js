import React from 'react';
import {Grid, Cell} from 'react-mdl'
class Experience extends React.Component {
    render(){
      return (
         <Grid>
             <Cell col={4} >
               <p>{this.props.startYear} - {this.props.endYear} </p>
               <p>Technology</p> 



             </Cell>
             <Cell col={8}>
             <h6 style={{marginTop:'0px'}}>{this.props.jobName}</h6>
             <p>{this.props.technology}</p>
          <p>{this.props.jobDescription}</p>
             </Cell>
         </Grid>
      );
    }
} 


export default Experience;