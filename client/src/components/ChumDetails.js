import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

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

    // console.log(userChums.map(chm => console.log(chm)))
    // console.log(chum)
    // loop through user chums array to see if chum.id is found in each userchum hash or not
    return (
        <div className='chumDetails'>

            <div className='pp' style={{backgroundColor: chum.pp ? chum.pp :'#FFFF00'}}>
                xd
            </div>

            {isFollowing() ? <button onClick={() => handleUnFollow(chum)}>remove</button> : <button onClick={() => handleFollow(chum)}>add chum</button>}
            
            <h2>{chum.username}</h2>

            <h3>{chum.name}</h3>

            <p>{chum.bio}</p>

            {
                chumPosts.length > 0 ?
                chumPosts.map(post =>
                    <PostCard key={post.id} post={post} postType='chum' /> ) :
                <p>{chum.username} hasn't posted yet :o</p> 
            }

            <h2>
               <button onClick={() => history.goBack()}>back</button>
            </h2>

        </div>
    );

}

export default ChumDetails;