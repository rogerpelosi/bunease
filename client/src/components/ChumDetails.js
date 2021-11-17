import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {ReactComponent as Bunny} from './bunny.svg';

import PostCard from './PostCard';

// component for external user profile to view and follow

function ChumDetails({ userChums, handleFollow, handleUnFollow }) {

    const [chum, setChum] = useState({});
    const [chumPosts, setChumPosts] = useState([]);

    const id = useParams().id;
    let history = useHistory();

    useEffect(() => {
        fetch(`/api/users/${id}`)
        .then(resp => resp.json())
        .then(user => {setChum(user);
                       setChumPosts(user.posts)})
    },[id])

    const isFollowing = () => {
        return userChums.find(userChum => userChum.id === chum.id)
    };

    const color = chum.pp ? chum.pp : 'rgb(0, 187, 255)';

    // console.log(userChums.map(chm => console.log(chm)))
    // console.log(chum)
    // loop through user chums array to see if chum.id is found in each userchum hash or not
    return (
        <div className='chumDetails'>

            <div className='chumintro'>

            <div className='pp' >
                <Bunny className='chumbunny' style={{fill: color}} />
            </div>

            {/* {isFollowing() ? <button id="bigremove" onClick={() => handleUnFollow(chum)}>remove</button> : <button id="bigadd" onClick={() => handleFollow(chum)}>add chum</button>} */}
            
            <h2>{chum.username}</h2>

            <h3>{chum.name ? chum.name : 'noname'}</h3>

            <p>{chum.bio ? chum.bio : "nothing interesting to say apparently 🤷"}</p>

            {isFollowing() ? <button id="bigremove" onClick={() => handleUnFollow(chum)}>remove</button> : <button id="bigadd" onClick={() => handleFollow(chum)}>add chum</button>}

            </div>

            <div className='chumposts'>

            {
                chumPosts.length > 0 ?
                chumPosts.map(post =>
                    <PostCard key={post.id} post={post} postType='chum' /> ) :
                <p id='noposts'>🚫 ruh-roh, {chum.username} hasn't posted yet :o 👿</p> 
            }

            </div>

            <h2>
               <button id='userback' onClick={() => history.goBack()}>back</button>
            </h2>

        </div>
    );

}

export default ChumDetails;