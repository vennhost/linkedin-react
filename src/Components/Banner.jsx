import React from "react"
import { Jumbotron, Container } from 'reactstrap';
import banner from "../img/banner.png"
import Profile from "./Profile";
import "../index.css"
class Banner extends React.Component {
    state = {  }
    render() { 
        
        return ( 
            <Container>
            <Jumbotron fluid className="offset-md-2 col-md-8 .offset-md-2" >
            <img className="banner" src={banner}  width="100%"/>
              <Container fluid>
                
                <Profile></Profile>
              </Container>
              
            </Jumbotron>
            </Container>
         );
    }
}
 
export default Banner;