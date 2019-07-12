import React from 'react';
import {Grid, Cell} from 'react-mdl'
class Education extends React.Component {
    render(){
      return (
         <Grid>
             <Cell col={4} >
             <p>{this.props.startYear} - {this.props.endYear}</p>


             </Cell>
             <Cell col={5}>
                 <h6 style={{marginTop:'0px'}}>{this.props.schoolName}</h6>
                 <p>{this.props.schoolDescription}</p>
                 <p>{this.props.GPA}</p>
             </Cell>
         </Grid>
      );
    }
} 


export default Education;