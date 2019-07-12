import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import './App.css';
import Mili from './Mili.jpg'
import Project from './Project'

class Resume extends React.Component{
    render(){
        return (
        <div>
            <Grid>
             <Cell col={4} className>
                 <div style={{textAlign:'center'}}>
                     <img src={Mili} style={{height:'400px',   alignItems: 'center',  justifyContent:'center'}}  alt='Mili'></img>
                     </div>
                     <h2 style={{paddingTop: '2em'}}> Mili Shah </h2>
                     <h4 style={{color:'grey'}}>Programmer</h4>
                     <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                     <p>Seeking a fulltime position with a company that offers me a positive atmosphere to learn and focus on applying my programing and analytical skills.</p>
                     <p> A reliable and detailed-oriented individual looking to work as software engineer. Offering expertise in HTML, C++, and core web design, JavaScript (React JS, Node JS),JAVA.</p>
                     <p>	Gained knowledge in statistics, data mining, machine learning, predictive modeling. </p>

                     <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                     <h5>Adress</h5>
                     <p>2050 SouthWest ExpressWay,San Jose, CA,95216</p>
                     <h5>Phone</h5>
                     <p>(412)304-2532</p>
                     <h5>Email</h5>
                     <p>shah.mili15@gmail.com</p>
                     <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                     <h2>Eductation</h2>
                  <Education
                  startYear={2017}
                  endYear={2019}
                  schoolName="Rober Morris University"
                  schoolDescription="Masters in DataAnalytics"
                  GPA="GPA - 4.0"
                   />
                   <Education
                  startYear={2013}
                  endYear={2016}
                  schoolName="Sabar Institute of Technology"
                  schoolDescription="Information System"
                  GPA="GPA - 3.5"
                   />
                   <Education
                  startYear={2009}
                  endYear={2012}
                  schoolName="Nirma University"
                  schoolDescription="Information System"
                  GPA="GPA - 3.7"
                   />

             </Cell>
             <Cell col={8} className="resume-right-col ">
                 <h2>Projects</h2>
                  <Project
                  startYear={2019}
                  endYear={2019}
                  projectTitle="Portfolio"
                  technology="React"
                  tool="Node Js,Visual Studio Code"
                  description="Make a portfolio using different react library like react-mdl,react-router."
                   />
                   <Project
                  startYear={2018}
                  endYear={2018}
                  projectTitle="EMovie App"
                  technology="Java,PHP"
                  tool="Android Studio, WempServer"
                  description="Using Java and Java API developed an app which displayed information and trailers of current and upcoming movies also used JSON Properties to connect with database."
                   />
                    <Project
                  startYear={2016}
                  endYear={2016}
                  projectTitle="Online Quiz Portal"
                  technology= "PHP,SQL,HTMl,JavaScript"
                  tool="Adobe DreamWeaver, WempServer"
                  description="Using PHP, JavaScript, HTML and SQL, I developed a web portal to handle online exams and generate results for students."
                   />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience
              startYear={2015}
              endYear={2015}
              jobName="Web Developer Intern"
              technology="PHP,SQL,JavaScript,HTML,CSS"
              jobDescription="Developed art selling portal for an artist based on his requirements at DataSoft."
            
              />
              <Experience
                startYear={2013}
                endYear={2014}
                jobName="FreeLancer(Web Developer)"
                technology="PHP,SQL,JavaScript,HTML5,CSS,Jquery"
                jobDescription="Made a media website (http://www.hellogujarattv.in/company.php) for a local reporter to upload his shows,News, and articles, using PHP and MySQL and used HTML5 to ensure security. 
                             	Worked for E-news website as a requirement analyst and made report including PFD, DFD and Data dictionary. Built weather information functionality using jQuery."
                />
                 <hr style={{borderTop: '3px solid #e22947'}} />
                               
                              <h2> Skills</h2>
                              
                            <Skills
                            skill="javascript"
                            progress={80}
                            />
                        <Skills
                         skill="HTML/CSS"
                         progress={80}
                          />
                         
                        <Skills
                         skill="NodeJS"
                          progress={75}
                         />
                          <Skills
                         skill="SQL"
                          progress={70}
                         />
                          <Skills
                            skill="React"
                            progress={50}
                            />
                               <Skills
                         skill="PHP"
                          progress={80}
                         />
                            </Cell>
            </Grid>
        
            </div>
        );
    }
}

export default Resume;