import React from 'react';
import {Toast, ToastHeader, ToastBody} from 'reactstrap';
import ProfileHeading from './ProfileHeading';



class NewsFeed extends React.Component {
    state = { 
        posts: []
     }
    render() { 
        return ( 
            <>
                <div>
                   <ProfileHeading profile={this.state.profile} /> 
                </div>
                <div>
                    {this.state.posts.map((post, index) => 
                        <div key={index} className="p-3 bg-info my-2 rounded">
                            <Toast>
                            <ToastHeader icon="info">
                                {post.username}
                            </ToastHeader>
                            <ToastBody>
                               {post.text}
                            </ToastBody>
                            </Toast>
                        </div>
                        )}
                </div>
            </>
            );
    }

    componentDidMount=async ()=>{
        let response=await fetch("https://strive-school-testing-apis.herokuapp.com/api/posts/",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let posts = await response.json()
        this.setState({
            posts: posts
        })
    }
}
 
export default NewsFeed;