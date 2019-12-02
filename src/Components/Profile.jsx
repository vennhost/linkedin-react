import React from "react"
import ProfileHeading from "./ProfileHeading";
import About from "./About";

class Profile extends React.Component {
    state = { 
        profile:null
     }
    render() { 
        return ( 
            <div>
{this.state.profile?
    // <About aboutUs={this.state.profile.bio}></About>
   <> <ProfileHeading profile={this.state.profile}></ProfileHeading>
    </> :<h2>This profile is loading</h2>
}
            </div>
         );
    }
    componentDidMount=async ()=>{
        let response=await fetch(" https://strive-school-testing-apis.herokuapp.com/api/profile/me",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let prof=await response.json()
        this.setState({
            profile:prof
        })
    }
}
 
export default Profile;