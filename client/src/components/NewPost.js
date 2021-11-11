// import { useState } from 'react';

function NewPost({ newPost, setNewPost, handlePost }) {

    // const [label, setLabel] = useState('');
    // const [displayedImg, setDisplayedImg] = useState('');

    console.log(newPost);

    const handleChange = (e) => {
        setNewPost({...newPost, label: e.target.value});
    }

    return (
        <div>

            <input
                type="text"
                name="label"
                placeholder='label your new post'
                value={newPost.label}
                onChange={e => handleChange(e)}
                className="inputField" />

            <img src={newPost.image} alt={newPost.label} />

            {/* post button should redirect to me/posts, and send post request with result info and label */}

            <button onClick={handlePost}>post</button>

        </div>
    );

}

export default NewPost;