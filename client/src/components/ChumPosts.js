import PostCard from './PostCard';
import {ReactComponent as Huh} from './nochums.svg';

// component for current user's feed of their chum's posts

function ChumPosts({ chumPosts }) {
    // console.log(chumPosts);
    const posts = chumPosts.map(post =>  
    <PostCard key={post.id} post={post} postType='chums' /> );

    // if(chumPosts.length === 0) {
    //     return (
    //         <div cl>
    //             <Huh />
    //         </div>
    //     )
    // }

    return (
        <div className="chumsposts">
            {chumPosts.length === 0 ? <Huh /> : posts}
        </div>
    );

}

export default ChumPosts;