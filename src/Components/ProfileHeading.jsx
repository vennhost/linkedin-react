import React from "react"

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="my-5">
                <img src={this.props.profile.image} alt="my pic"/>
                <h3>{this.props.profile.name} {this.props.profile.surname}</h3>
            </div>
         );
    }
}
 
export default ProfileHeading;
