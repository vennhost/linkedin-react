import React from "react"
import ProfileHeading from "./ProfileHeading";
import About from "./About";
import ProfileModal from "./ProfileModal";
import {Button,Row,Col} from "reactstrap"
import { MdEdit } from "react-icons/md";

class Profile extends React.Component {
    state = { 
        profile:null,
        modalOpen:false
     }
    render() { 
        return ( 
            <div>
                <Row>
{this.state.profile?
    // <About aboutUs={this.state.profile.bio}></About>
   <> <Col md="8">
   <ProfileHeading profile={this.state.profile}></ProfileHeading></Col>
   <Col md="4" className="my-4">
   <Button onClick={()=>this.setState({modalOpen:true})}><MdEdit />?</Button>
   <ProfileModal profile={this.state.profile} open={this.state.modalOpen}></ProfileModal></Col>
    </> :<h2>This profile is loading</h2>
}</Row>
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