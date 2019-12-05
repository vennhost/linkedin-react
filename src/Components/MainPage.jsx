import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap'

import '../index.css'

import NavBar from './NavBar';
import Profile from './Profile';
import Banner from './Banner';
import Experience from './Experience';
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'



class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Router>
            <NavBar />

            {/* with react-router-dom
            you should create some routes  like:
            - newsfeed
            - profile
            etc...
            
            In the profile route , you should be able to accept a quesry string parameter
            sot that if profile/user5, will the get info from user5 etc*/}
            
                <Container>
                    <Route path="/" exact component={HomePage} />
                    <Route path="profile" component={ProfilePage} />
                </Container>
            </Router>

            </>
            
            );
    }
}
 
export default MainPage;