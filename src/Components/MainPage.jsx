import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import {Container} from 'reactstrap'
import NavBar from './NavBar';
import Profile from './Profile';
import '../index.css'
=======
import {} from 'reactstrap'
import NavBar from './NavBar'
import Profile from './Profile'
import Banner from './Banner';
>>>>>>> 9cd4977f4a2db933b152b2869227bcf58e6c3455

class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavBar />
<<<<<<< HEAD
            
            <Container className="profile mt-5">
            <Profile></Profile>
            </Container>
=======
            <Banner></Banner>
            {/* <Profile></Profile> */}
>>>>>>> 9cd4977f4a2db933b152b2869227bcf58e6c3455
            

            </>
            
            );
    }
}
 
export default MainPage;