import React from 'react';
import {Container, Card, CardImg, CardTitle, Row, Col, CardBody, CardText, CardSubtitle } from 'reactstrap';
import '../index.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ExpModal from './ExpModal'



class Experience extends React.Component {
    state = { 
        experience: [],
        modalOpen: false
     }
    render() { 
        return ( 
            <Container>
            <div className="experience">
                 <Container>  
                    <div className="row"><h3 className="col-10 title">Experience</h3><div className="col-2"><MaterialIcon id="plus" icon="add" size={50} onClick={()=>this.setState({modalOpen:true})} /><ExpModal experience={this.state.experience} parentUpdate={this.parentUpdate} open={this.state.modalOpen}></ExpModal></div></div>
                    
                
                {this.state.experience && this.state.experience.map((item, index) => 
                    
                    <Card key={index} className="card mb-3">
                        <Row className="row no-gutters">
                            <Col className="col-md-4">
                                <CardImg src={item.image} className="card-img" alt="Company Image" />
                            </Col>
                            <div className="col-md-8">
                            <CardBody className="card-body">
                                <Row><CardTitle className="col-10">{item.role}</CardTitle> <Col><MaterialIcon id="plus" icon="create" size={30} /></Col></Row>
                                <Row><CardSubtitle className="card-text col-10">{item.company}</CardSubtitle><Col><MaterialIcon id="plus" icon="delete" size={30} /></Col></Row>
                                <CardText className="card-text"><small className="text-muted">{item.startDate} - {item.endDate}</small></CardText>
                                <hr />
                            </CardBody>
                            </div>
                            
                        </Row>
                        
                        </Card>
                        
                    
                    /* <div key={index}><img src={item.image} width="60px" /></div> */)}
                    </Container>   
            </div>
            </Container>
         );
    }


    parentUpdate = (experience) => {
        this.setState({
            modalOpen: false,
            experience: experience
        })
    }

    componentDidMount = async () => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user20/experiences",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let experience = await res.json();
        console.log(experience)

        this.setState({
            experience: experience
        })

    }
}
 
export default Experience;