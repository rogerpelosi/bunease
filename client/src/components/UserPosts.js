import PostCard from './PostCard';

// this is a list of all of the current user's posts

function UserPosts({ userPosts }) {

    const posts = userPosts.map(post =>  
    <PostCard key={post.id} post={post} postType='user' /> );

    return (
        <div className='userposts'>
            {posts}
        </div>
    );

}

export default UserPosts;