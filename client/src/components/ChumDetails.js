import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import PostCard from './PostCard';

// component for external user profile to view and follow

function ChumDetails() {

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

    return (
        <div>

            <div className='pp' style={{backgroundColor: chum.pp ? chum.pp :'#FFFF00'}}>
                xd
            </div>
            
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