import { Link } from 'react-router-dom';

function PostCard({ post }) {

    // console.log(post)

    return (
        <div className="userpost">

            <Link to={`/me/posts/${post.id}`}>
                <img src={post.image} alt={post.label} onClick={e => console.log(e.target)}/>
            </Link>

        </div>
    );

}

export default PostCard;