import PostCard from './PostCard';

// this is a list of all of the current user's posts

function UserPosts({ userPosts }) {

    const posts = userPosts.map(post =>  
    <PostCard key={post.id} post={post} postType='user' /> );

    return (
        <div className='userposts'>
            {userPosts.length > 0? posts : <h3>try adding your first post!</h3>}
        </div>
    );

}

export default UserPosts;