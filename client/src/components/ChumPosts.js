import PostCard from './PostCard';

function ChumPosts({ chumPosts }) {

    const posts = chumPosts.map(post =>  <PostCard key={post.id} post={post} postType='chums' /> );

    return (
        <div>
            {posts}
        </div>
    );

}

export default ChumPosts;