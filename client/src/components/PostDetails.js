import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// this shows any post's comments, attached user, and gives ability to create new comments

function PostDetails() {

    const [postInfo, setPostInfo] = useState({});
    const {image, label} = postInfo;

    const [user, setUser] = useState({});
    const {username} = user;

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [update, setUpdate] = useState(false);

    const postComments = comments.map(comment => {
        return (
            <div className="comments" key={comment.id}>
                <p>{comment.user.username}</p>
                <p>{comment.comment}</p>
            </div>);
        })

    const id = useParams().id;

    let history = useHistory();

    useEffect(() => {
        fetch(`/api/posts/${id}`)
        .then(resp => resp.json())
        .then(post => {setPostInfo(post);
                        setUser(post.user);
                        setComments(post.comments)})
    }, [id, setUpdate, update])

    function handleComment(postId) {
        fetch(`/api/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({post_id: postId, comment: newComment})
        })
        .then(setUpdate(!update))
        .then(setNewComment(''))
    }

    return (
       <div className='postdetails'>

           <h2>{username}</h2>
           <h3>{label}</h3>

           <h2>
               <button onClick={() => history.goBack()}>back</button>
           </h2>

           <img src={image} alt={label} />

            {postComments}

            <div className='newComment'>

            <input
                type="text"
                placeholder={`respond to ${username}'s post`}
                value={newComment}
                onChange={(e)=> setNewComment(e.target.value)}
                className="search_input"
            />

            <button onClick={() => handleComment(postInfo.id)}>comment</button>

            </div>
     
       </div> 
    );

}

export default PostDetails;