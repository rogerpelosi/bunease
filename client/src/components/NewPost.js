import { useHistory } from 'react-router-dom';

function NewPost({ newPost, setNewPost, handlePost }) {

    const handleChange = (e) => {
        setNewPost({...newPost, label: e.target.value});
    }

    let history = useHistory();

    return (
        <div>

            <h2>
               <button id='newpostback' onClick={() => history.push('/me')}>back</button>
            </h2>

            <input
                type="text"
                name="label"
                placeholder='label your new post'
                value={newPost.label}
                onChange={e => handleChange(e)}
                className="inputField" />

            <img src={newPost.image} alt={newPost.label} />

            <button onClick={handlePost}>post</button>

        </div>
    );

}

export default NewPost;