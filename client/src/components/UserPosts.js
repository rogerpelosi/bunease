import PostCard from './PostCard';

function UserPosts({ userInfo, userPosts }) {

    // const {username, name, pp, bio, email} = userInfo;
    // console.log(userPosts)

    const posts = userPosts.map(post =>  <PostCard key={post.id} post={post} /> );

    return (
        <div>
            {posts}
        </div>
    );

}

export default UserPosts;