import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import Navigation from './components/Navigation';

import UserPosts from './components/UserPosts';
import PostDetails from './components/PostDetails';
import StaticContainer from './components/StaticContainer';

function Authenticated({ setCurrentUser }) {

    const history = useHistory();

    const [userInfo, setUserInfo] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const [userChums, setUserChums] = useState([]);
    console.log(userChums);

    useEffect(() => {
        fetch(`/api/me`)
        .then(resp => resp.json())
        .then(currentUser => {setUserInfo(currentUser);
                             setUserPosts(currentUser.posts);
                             setUserChums(currentUser.followgainers);})
    },[])

    const handleLogout = () => {
        fetch(`/api/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              setCurrentUser(null)
              history.push('/')
            }
          })
      };

    return (
        <div>

            <Navigation />

            <Switch>

                <Route path='/me/posts/:id'>
                    <StaticContainer data={userInfo} dataType='user' />
                    <PostDetails />
                </Route>

                <Route path='/me'>
                    <StaticContainer data={userInfo} dataType='user' />
                    <UserPosts userInfo={userInfo} userPosts={userPosts} />
                </Route>

                <Route path='/posts'>
                    <StaticContainer data={userChums} dataType='chums' />
                </Route>

            </Switch>

            <button onClick={handleLogout}>
                logout
            </button>
    
        </div>
    );

}

export default Authenticated;