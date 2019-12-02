import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {} from 'reactstrap'
import NavBar from './NavBar'

class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavBar />
            <div>Hello World!</div> 

            </>
            
            );
    }
}
 
export default MainPage;