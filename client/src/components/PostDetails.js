import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

// this shows any post's comments, attached user, and gives ability to create new comments

function PostDetails() {

    const [postInfo, setPostInfo] = useState({});
    const {image, label} = postInfo;

    const [user, setUser] = useState({});
    const {username} = user;

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState(null);

    const postComments = comments.map(comment => {
        return (
            <div className="comments" key={comment.id}>
                <Link to={`/users/${comment.user.id}`}>
                    <p className="commentuser">{comment.user.username}</p>
                </Link>
                <p className='comment'>{comment.comment}</p>
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
    }, [id])

    function handleComment(postId) {
        fetch(`/api/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({post_id: postId, comment: newComment})
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(comment => {setComments([...comments, comment])
                                             setNewComment('')
                                            setError(null)})
            } else {
                resp.json().then(errors => {
                    console.error(errors);
                setError(errors)})
            }
        })
        //comment => setComments([...comments, comment])
    }

    return (
       <div className='postdetails'>

            <h2>
               <button id='postback' onClick={() => history.goBack()}>back</button>
           </h2>

           <Link to={`/users/${user.id}`} id='postowner'>
                <h2>{username}</h2>
           </Link>
           <h3>{label}</h3>

           {/* <h2>
               <button onClick={() => history.goBack()}>back</button>
           </h2> */}
           <div className='imgcontent'>

           <img className='singleimg' src={image} alt={label} />

           </div>

           {/* <h2>
               <button id='postback' onClick={() => history.goBack()}>
                   back
                </button>
           </h2> */}

            {/* {postComments} */}

            <div className='newComment'>

            <input
                type="text"
                placeholder={`respond to ${username}'s post`}
                value={newComment}
                onChange={(e)=> setNewComment(e.target.value)}
                className="search_input"
            />

            <h2>
                <button id='postcomment' onClick={() => handleComment(postInfo.id)}>
                    comment
                </button>
            </h2>

            <div className='commenterror'>
            {error ? <p className='error'>{error} 😈</p> : null}
            </div>

            </div>

            <div className='allcomments'>
            {postComments}
            </div>
     
       </div> 
    );

}

export default PostDetails;