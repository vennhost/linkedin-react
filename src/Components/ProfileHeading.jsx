import React from "react"
import '../index.css'
import FileUpload from "./FileUpload"
import {Container} from "reactstrap"

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            <Container>
             <div className="my-5">
                {/* <img className="profile-photo" src={this.props.profile.image} alt="my pic"/> */}
            {this.props.profile && 
            <div>
            <img className="profile-photo" src={this.props.profile.image}  width="30%" alt="my pic"/>
                <h4>{this.props.profile.name} {this.props.profile.surname}</h4>
                <h5>{this.props.profile.title}</h5>
                <h6>{this.props.profile.area}</h6>
            </div>
            }
            
            </div>
            </Container>
            
            </>
           
         );
    }
}
 
export default ProfileHeading;
