import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {} from 'reactstrap'
import NavBar from './NavBar'
import Profile from './Profile'

class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavBar />
            <Profile></Profile>
            

            </>
            
            );
    }
}
 
export default MainPage;