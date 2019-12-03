import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ProfileModal extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
      
      <Modal isOpen={this.props.open}>
        <ModalHeader>{this.props.profile.name}</ModalHeader>
        <ModalBody>
            {this.props.profile.bio}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Save</Button>{' '}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }
}
 
export default ProfileModal;