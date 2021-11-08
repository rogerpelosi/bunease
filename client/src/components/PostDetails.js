import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function PostDetails() {

    const [postInfo, setPostInfo] = useState({});
    const {image, label} = postInfo;

    const [user, setUser] = useState({});
    const {username} = user;

    const [comments, setComments] = useState([]);
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
    }, [id])

    return (
       <div className='postdetails'>

           <h2>{username}</h2>
           <h3>{label}</h3>

           <h2>
               <button onClick={() => history.goBack()}>back</button>
           </h2>

           <img src={image} alt={label} />

            {postComments}
     
       </div> 
    );

}

export default PostDetails;