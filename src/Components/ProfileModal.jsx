import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row,Col,Form,Label,Input,FormGroup } from 'reactstrap';


class ProfileModal extends React.Component {
    state = { 
      name: "",
        surname: "",
        title: "",
        bio: "",
        area: "",
        image: "",
      modal:false
     }

     modalClose=()=>{
       this.setState({
         modal:false
       })
     }
    render() { 
      

        return ( 
            <div>
      
      <Modal isOpen={this.props.open}>
        <ModalHeader><h3>Edit intro</h3></ModalHeader>
        <ModalBody>
        
                             <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text"  id="firstName"  />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input type="text" id="lastname"  />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="headline">Head Line</Label>
        <Input type="text"  id="headline" />
      </FormGroup>
      <FormGroup>
        <Label for="currentPosition">Current Position</Label>
        <Input type="text"  id="currentPosition" />
      </FormGroup>
      <FormGroup>
        <Label for="area">Area</Label>
        <Input type="text"  id="area" />
      </FormGroup>
      </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Save</Button>{' '}
          <Button color="secondary" onClick={()=>this.modalClose()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }
}
 
export default ProfileModal;