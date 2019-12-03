import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap'

import '../index.css'

import NavBar from './NavBar';
import Profile from './Profile';
import Banner from './Banner';
import Experience from './Experience';

class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavBar />
            
            <Container className="profile mt-5">
            {/* <Profile></Profile> */}
            </Container>
            <Banner></Banner>
            {/* <Profile></Profile> */}
            <Experience />

            </>
            
            );
    }
}
 
export default MainPage;