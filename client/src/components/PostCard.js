import { Link } from 'react-router-dom';

function PostCard({ post, postType }) {

    // console.log(post)

    if(postType === 'chums') {
        return (
            <div className="chumpost">

            <Link to={`/posts/${post.id}`}>
                <img src={post.image} alt={post.label} onClick={e => console.log(e.target)}/>
            </Link>

        </div>
        );
    }

    return (
        <div className="userpost">

            <Link to={`/me/posts/${post.id}`}>
                <img src={post.image} alt={post.label} onClick={e => console.log(e.target)}/>
            </Link>

        </div>
    );

}

export default PostCard;