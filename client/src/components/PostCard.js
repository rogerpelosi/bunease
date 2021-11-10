import { Link } from 'react-router-dom';

// component for rendering individ post: if chums (chumposts), it shows condensed thumbnails, if chum (chumdetails) it shows external user profile how current user sees their profile, if user (userposts) it shows only image thumbnails

function PostCard({ post, postType }) {

    if(postType === 'chums') {
        return (
            <div className="chumpost">

                <Link to={`/users/${post.user.id}`}>
                    <h2>{post.user.username}</h2>
                </Link>

                <h3>{post.label}</h3>

                <Link to={`/posts/${post.id}`}>
                    <img src={post.image} alt={post.label} />
                </Link>

            </div>
        );
    } else if(postType === 'chum') {
        return (
            <div className='userpost'>

                <Link to={`/posts/${post.id}`}>
                    <img src={post.image} alt={post.label} />
                </Link>
            </div>
        );
    }

    return (
        <div className="userpost">

            <Link to={`/me/posts/${post.id}`}>
                <img src={post.image} alt={post.label} />
            </Link>

        </div>
    );

}

export default PostCard;