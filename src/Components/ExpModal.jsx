import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row,Col,Form,Label,Input,FormGroup } from 'reactstrap';
import ProfileUpdate from "./ProfileUpdateApi";

class ExpModal extends React.Component {
  
    state = { 
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description:"",
        area: "",
        image: "",

        modalOpen: false
     }


    
     modalClose=()=>{
       this.setState({
         modalOpen: false
       })
     }

    // closeModal(e) {
    //   if(e.target.id === "Modal") {
    //     this.setState({show: false})
    //   }
    // }

     postExperience = async () => {
      let experience = {
        "name": document.querySelector("#name").value,
        "surname": document.querySelector("#surname").value,
        "email": document.querySelector("#email").value,
        "bio": document.querySelector("#bio").value,
        "area": document.querySelector("#area").value,
        "title": document.querySelector("#title").value
  };
      let updatedExp = await ProfileUpdate(experience)
      this.props.parentUpdate(updatedProfile)
  }

       /*  role: "",
        company: "",
        startDate: "",
        endDate: "",
        description:"",
        area: "",
        image: "", */

    render() { 
      
       return ( 
            <div>
      <Modal isOpen={this.props.open} >
        <ModalHeader><h3>Edit intro</h3></ModalHeader>
        <ModalBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="role">Role</Label>
                    <Input onChange={(val) => this.setState({name: val.target.value})} value={this.state.role} type="text" id="role" placeholder="Role..." />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="company" >Company Name</Label>
                    <Input onChange={(val) => this.setState({surname: val.target.value})} value={this.state.company} type="text" id="surname" placeholder="Company" />
              </FormGroup>
            </Col>
          </Row>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                    <Input onChange={(val) => this.setState({email: val.target.value})} value={this.state.startDate} type="date" id="startDate" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress">Bio</Label>
                     <Input onChange={(val) => this.setState({bio: val.target.value})} value={this.state.bio} type="text" id="bio" placeholder="Bio" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePosition">Current Position</Label>
                     <Input onChange={(val) => this.setState({title: val.target.value})} value={this.state.title} type="text" id="title" placeholder="Title" />
              </FormGroup>
              <FormGroup>
                 <Label for="exampleCity">Area</Label>
                     <Input onChange={(val) => this.setState({area: val.target.value})} value={this.state.area} type="text"  id="area" placeholder="City"/>
              </FormGroup>
          
      </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>this.updateProfile()} >Save</Button>{' '}
          <Button color="secondary" onClick={this.modalClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }
}
export default ExpModal;