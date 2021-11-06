import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import UserPosts from './components/UserPosts';
import PostDetails from './components/PostDetails';
import StaticContainer from './components/StaticContainer';

function Authenticated({ setCurrentUser }) {

    const [userInfo, setUserInfo] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        fetch(`/api/me`)
        .then(resp => resp.json())
        .then(currentUser => {setUserInfo(currentUser);
                             setUserPosts(currentUser.posts)})
    },[])

    return (
        <div>

            <Switch>

                <Route path='/me/posts/:id'>
                    <PostDetails />
                    <StaticContainer data={userInfo} dataType='user' />
                </Route>

                <Route path='/me'>
                    <UserPosts userInfo={userInfo} userPosts={userPosts} />
                    <StaticContainer data={userInfo} dataType='user' />
                </Route>

            </Switch>
    
        </div>
    );

}

export default Authenticated;