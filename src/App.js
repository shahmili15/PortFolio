import React from 'react';
import Main from './main';
import {Link,NavLink} from 'react-router-dom';


import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';

class App extends React.Component {
  render(){
    return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color"title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
            <NavLink to="/" exact activeStyle={
                     {color: '#ffaa3b',
                      borderTop: '4px solid #ffaa3b',
                      fontWeight: 900}
                    } >Home</NavLink > 
                <NavLink to="/AboutMe" exact activeStyle={
                     {color: '#ffaa3b',
                     borderTop: '4px solid #ffaa3b',
                     fontWeight: 900}
                  } >About</NavLink> 
                <NavLink to="/Contact" exact activeStyle={
                      {color: '#ffaa3b',
                      borderTop: '4px solid #ffaa3b',
                      fontWeight: 900}
                  } >Contact</NavLink >
               <NavLink to="/resume" exact activeStyle={
                      {color: '#ffaa3b',
                      borderTop: '4px solid #ffaa3b',
                      fontWeight: 900}
                  } >Resume</NavLink >
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/AboutMe">AboutMe</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
    
</div>
  );
}
}
export default App;
