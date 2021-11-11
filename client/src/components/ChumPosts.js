import PostCard from './PostCard';

// component for current user's feed of their chum's posts

function ChumPosts({ chumPosts }) {
    // console.log(chumPosts);
    const posts = chumPosts.map(post =>  
    <PostCard key={post.id} post={post} postType='chums' /> );

    return (
        <div>
            {posts}
        </div>
    );

}

export default ChumPosts;