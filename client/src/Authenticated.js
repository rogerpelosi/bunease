import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import Navigation from './components/Navigation';
import StaticContainer from './components/StaticContainer';

import UserPosts from './components/UserPosts';
import ChumPosts from './components/ChumPosts';
import PostDetails from './components/PostDetails';

import SearchChums from './components/SearchChums';

function Authenticated({ setCurrentUser }) {

    const history = useHistory();

    const [userInfo, setUserInfo] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    const [userChums, setUserChums] = useState([]);

    const [chumPosts, setChumPosts] = useState([]);
    const [chumsList, setChumsList] = useState([]);

    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`/api/me`)
        .then(resp => resp.json())
        .then(currentUser => {setUserInfo(currentUser);
                             setUserPosts(currentUser.posts);
                             setUserChums(currentUser.followgainers);})
    },[])

    useEffect(() => {
        fetch(`/api/posts`)
        .then(resp => resp.json())
        .then(posts => setChumPosts(posts))
    },[])

    useEffect(() => {
        fetch(`/api/users`)
        .then(resp => resp.json())
        .then(users => setChumsList(users))
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

      const filteredChums = chumsList.filter(chum => (chum.username || '').toLowerCase().includes(search.toLowerCase()));

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

                <Route path='/posts/:id'>
                    <StaticContainer data={userChums} dataType='chums' />
                    <PostDetails />
                </Route>

                <Route path='/posts'>
                    <StaticContainer data={userChums} dataType='chums' />
                    <ChumPosts chumPosts={chumPosts} />
                </Route>

                <Route path='/users'>
                    <StaticContainer data={userChums} dataType='chums' />
                    <SearchChums search={search} setSearch={setSearch} chums={filteredChums} />
                </Route>

            </Switch>

            <button onClick={handleLogout}>
                logout
            </button>
    
        </div>
    );

}

export default Authenticated;