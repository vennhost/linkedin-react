import React from 'react';
import {Container, Card, CardImg, CardTitle, Row, Col, CardBody, CardText, CardSubtitle } from 'reactstrap';
import '../index.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';



class PostExperience extends React.Component {
    state = { 
        exp: {

        }
     }
    render() { 
        return ( 
            <Container>
                
            </Container>
         );
    }

    componentWillMount = async (experience) => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user4/experiences",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(experience)
            
        })

        if (res.ok) {
            return await res.json()
        }
        
    }
}
 
export default PostExperience;