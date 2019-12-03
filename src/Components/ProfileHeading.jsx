import React from "react"
import '../index.css'

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 
<<<<<<< HEAD
            <div className="my-5">
                <img className="profile-photo" src={this.props.profile.image} alt="my pic"/>
=======
            <div>
                <img src={this.props.profile.image}  width="30%" alt="my pic"/>
>>>>>>> 9cd4977f4a2db933b152b2869227bcf58e6c3455
                <h3>{this.props.profile.name} {this.props.profile.surname}</h3>
                <h4>{this.props.profile.title}</h4>
                <h5>{this.props.profile.area}</h5>
            </div>
         );
    }
}
 
export default ProfileHeading;
