import React from "react"
import '../index.css'

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="my-5">
                <img className="profile-photo" src={this.props.profile.image} alt="my pic"/>
                <h3>{this.props.profile.name} {this.props.profile.surname}</h3>
            </div>
         );
    }
}
 
export default ProfileHeading;
