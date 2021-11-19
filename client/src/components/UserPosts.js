import PostCard from './PostCard';
import CloudinaryUpload from './CloudinaryUpload';


// this is a list of all of the current user's posts

function UserPosts({ userPosts, handleUpload }) {

    const posts = userPosts.map(post =>  
    <PostCard key={post.id} post={post} postType='user' /> );

    return (
        <div className='userposts'>
            {
             userPosts.length > 0 ?
             posts : 
             <div>
             <h3>try adding your first post!</h3>
             <CloudinaryUpload
                    preset="jz79ayen"
                    buttonText="⭐ first post ⭐"
                    handleUpload={handleUpload}
                    buttonClass='firstPost' />
             </div>
            }
        </div>
    );

}

export default UserPosts;