import React from 'react';
import {Container} from 'reactstrap';
import NewsFeed from './NewsFeed'
import Banner from './Banner';


class HomePage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Container >
            <Banner ></Banner>
                <NewsFeed />
                </Container>
            </>
         );
    }
}
 
export default HomePage;