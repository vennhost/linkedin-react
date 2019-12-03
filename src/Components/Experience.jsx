import React from 'react';
import {Container, Card, CardImg, CardTitle, Row, Col, CardBody, CardText, CardSubtitle } from 'reactstrap';
import '../index.css'


class Experience extends React.Component {
    state = { 
        exp: []
     }
    render() { 
        return ( 
            <Container>
            <div className="experience">
                <div><h3>Experience</h3></div>

                {this.state.exp.map((item, index) => 
                    
                    <Card key={index} className="card mb-3">
                        <Row className="row no-gutters">
                            <Col className="col-md-4">
                                <CardImg src={item.image} className="card-img" alt="Company Image" />
                            </Col>
                            <div className="col-md-8">
                            <CardBody className="card-body">
                                <CardTitle>{item.role}</CardTitle>
                                <CardSubtitle className="card-text">{item.company}</CardSubtitle>
                                <CardText className="card-text"><small className="text-muted">{item.startDate} - {item.endDate}</small></CardText>
                            </CardBody>
                            </div>
                        </Row>
                        </Card>
                    
                    /* <div key={index}><img src={item.image} width="60px" /></div> */)}
            
            </div>
            </Container>
         );
    }

    componentDidMount = async () => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user4/experiences",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let exp = await res.json();
        console.log(exp)

        this.setState({
            exp: exp
        })

    }
}
 
export default Experience;