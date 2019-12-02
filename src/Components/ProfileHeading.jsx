import React from "react"

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img src={this.props.profile.image}  width="20%" alt="my pic"/>
                <h3>{this.props.profile.name} {this.props.profile.surname}</h3>
                <h4>{this.props.profile.title}</h4>
                <h5>{this.props.profile.area}</h5>
            </div>
         );
    }
}
 
export default ProfileHeading;
