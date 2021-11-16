import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import Navigation from './components/Navigation';
import StaticContainer from './components/StaticContainer';

import UserPosts from './components/UserPosts';
import EditUserProfile from './components/EditUserProfile';
import NewPost from './components/NewPost';

import PostDetails from './components/PostDetails';

import ChumPosts from './components/ChumPosts';
import ChumDetails from './components/ChumDetails';
import SearchChums from './components/SearchChums';

function Authenticated({ currentUser, setCurrentUser }) {

    const history = useHistory();

    const [update, setUpdate] = useState(false);

    const [userInfo, setUserInfo] = useState({});
    const [newUserInfo, setNewUserInfo] = useState({username: '', name: '', email: '', pp: '', bio: ''});

    const [userPosts, setUserPosts] = useState([]);
    const [userChums, setUserChums] = useState([]);

    const [chumPosts, setChumPosts] = useState([]);
    const [chumsList, setChumsList] = useState([]);

    const [search, setSearch] = useState('');

    const [newPost, setNewPost] = useState({image: '', thumb: '', label: ''});

    useEffect(() => {
        fetch(`/api/me`)
        .then(resp => resp.json())
        .then(cu => {setUserInfo(cu);
                    setUserPosts(cu.posts);
                    setUserChums(cu.followgainers);
                    setNewUserInfo(newUserInfo => {return {...newUserInfo, username: cu.username, name: cu.name, email: cu.email, pp: cu.pp, bio: cu.bio}})})
    },[setUserInfo, setUserChums]);

    useEffect(() => {
        fetch(`/api/posts`)
        .then(resp => resp.json())
        .then(posts => setChumPosts(posts))
    },[setChumPosts]);

    useEffect(() => {
        fetch(`/api/users`)
        .then(resp => resp.json())
        .then(users => setChumsList(users))
    },[setUserChums])

    const handleLogout = () => {
        fetch(`/api/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              setCurrentUser(null)
              history.push('/api/login')
            }
          })
      };

      const handleSubmit = (e) => {
          e.preventDefault();
          fetch(`/api/users/${currentUser.id}`, {
              method: 'PATCH',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(newUserInfo)})
              .then(resp => console.log(resp))
              .then(setUserInfo({...userInfo, username: newUserInfo.username, name: newUserInfo.name, email: newUserInfo.email, bio: newUserInfo.bio, pp: newUserInfo.pp}))
      };

      const handleFollow = (chum) => {
        //   fetch(`/api/users/${chum.id}/follow`, {
        //       method: 'POST',
        //       headers: {'Content-Type': 'application/json'}
        //   })
        //   .then(setUserChums([...userChums, chum]))
        // console.log(chum.posts)
        fetch(`/api/users/${chum.id}/follow`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok) {
                setUserChums([...userChums, chum]);
                // chum.posts.forEach(post => setChumPosts([...chumPosts, post]))
                // setChumPosts([...chumPosts, chum.posts])
            }
        })
        // .then(setUserChums([...userChums, chum]))
      };

      const handleUnFollow = (chum) => {
        const newUserChums = userChums.filter(userChum => userChum.id !== chum.id)
        fetch(`/api/users/${chum.id}/unfollow`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(setUserChums(newUserChums))
        .then(setTimeout(() => {setUpdate(!update)}, 10000), console.log('unfollowed'))
      };

      const handleUpload = (result) => {
        setNewPost({...newPost, image: result.info.secure_url, thumb: result.info.eager[0].secure_url })
      }

      const handlePost = () => {
        fetch('/api/posts', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newPost)
        })
          .then(res => res.json())
          .then(post => {
            console.log(post);
            setUserPosts([post,...userPosts]);
            history.push('/me')
          })
      };

      const filteredChums = chumsList.filter(chum => (chum.username || '').toLowerCase().includes(search.toLowerCase()));

    //   filtered posts upon removal of a friend 

    return (
        <div className="authapp">

            <h1 className='logo'>bunease©</h1>

            <Navigation />

            <Switch>

                <Route path='/me/posts/new'>
                    <StaticContainer data={userInfo} dataType='user' handleUpload={handleUpload} />
                    <NewPost newPost={newPost} setNewPost={setNewPost} handlePost={handlePost} />
                </Route>

                <Route path='/me/posts/:id'>
                    <StaticContainer data={userInfo} dataType='user' handleUpload={handleUpload} />
                    <PostDetails />
                </Route>

                <Route path='/me/edit'>
                    <StaticContainer data={newUserInfo} dataType='edituser' />
                    <EditUserProfile handleSubmit={handleSubmit} newUserInfo={newUserInfo} setNewUserInfo={setNewUserInfo} />
                </Route>

                <Route path='/me'>
                    <StaticContainer data={userInfo} dataType='user' handleUpload={handleUpload} />
                    <UserPosts userPosts={userPosts} />
                </Route>

                <Route path='/posts/:id'>
                    <StaticContainer data={userChums} dataType='chums'
                    handleUnFollow={handleUnFollow} />
                    <PostDetails />
                </Route>

                <Route path='/posts'>
                    <StaticContainer data={userChums} dataType='chums'
                    handleUnFollow={handleUnFollow} />
                    <ChumPosts chumPosts={chumPosts} />
                </Route>

                <Route path='/users/:id'>
                    <StaticContainer data={userChums} dataType='chums' 
                    handleUnFollow={handleUnFollow}/>
                    <ChumDetails userChums={userChums} handleFollow={handleFollow}handleUnFollow={handleUnFollow}/>
                </Route>

                <Route path='/users'>
                    <StaticContainer data={userChums} dataType='chums' 
                    handleUnFollow={handleUnFollow}/>
                    <SearchChums search={search} setSearch={setSearch} chums={filteredChums} />
                </Route>

            </Switch>

            <button id="logout" onClick={handleLogout}>
                logout
            </button>
    
        </div>
    );

}

export default Authenticated;