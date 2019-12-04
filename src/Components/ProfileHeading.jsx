import React from "react"
import '../index.css'

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 
<<<<<<< HEAD
            <div className="">
                <img className="profile-photo" src={this.props.profile.image} alt="my pic"/>
=======
             <div className="my-5">
                {/* <img className="profile-photo" src={this.props.profile.image} alt="my pic"/> */}
>>>>>>> 015b64876973a8816a84b00eb81dbf4e5a02e67b
            <div>
                {/* <img className="profile-photo" src={this.props.profile.image}  width="30%" alt="my pic"/> */}
                <h3>{this.props.profile.name} {this.props.profile.surname}</h3>
                <h4>{this.props.profile.title}</h4>
                <h5>{this.props.profile.area}</h5>
            </div>
            </div>
           
         );
    }
}
 
export default ProfileHeading;
