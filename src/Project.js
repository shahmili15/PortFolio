import React from 'react';
import {Grid, Cell} from 'react-mdl'
class Project extends React.Component {
    render(){
      return (
         <Grid>
             <Cell col={4} >
             <p>{this.props.startYear} - {this.props.endYear}</p>
             <p>Technology</p>
             <p>Tools</p>


             </Cell>
             <Cell col={5}>
                 <h6 style={{marginTop:'0px'}}>{this.props.projectTitle}</h6>
                 <p>{this.props.technology}</p>
                 <p>{this.props.tool}</p>
                 <p>{this.props.description}</p>
             </Cell>
         </Grid>
      );
    }
} 


export default Project;