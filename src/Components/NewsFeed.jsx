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
                   <ProfileHeading /> 
                </div>
                <div>
                    {this.state.posts.map((post, index) => 
                        <div className="p-3 bg-info my-2 rounded">
                            <Toast key={index}>
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