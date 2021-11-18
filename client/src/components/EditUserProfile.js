import { useHistory } from 'react-router-dom';

// component for editing current user profile info

function EditUserProfile({ handleSubmit, newUserInfo, setNewUserInfo }) {

    const {username, name, email, pp, bio} = newUserInfo;

    let history = useHistory();

    const handleChange = (e) => {
        setNewUserInfo({...newUserInfo, [e.target.name]: e.target.value})
    }

    return (
        <div className="editprofile">

            <h2>
               <button id='editback' onClick={() => history.goBack()}>back</button>
           </h2>

            <form id="editprofile" onSubmit={e => handleSubmit(e)}>

                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder={name}
                        value={name}
                        onChange={handleChange}
                        className="inputField" />
                </p>

                <p>
                    <input
                        type="text"
                        name="username"
                        placeholder={username}
                        value={username}
                        onChange={handleChange}
                        className="inputField" />
                </p>

                <p>
                    <input
                        type="text"
                        name="email"
                        placeholder={email}
                        value={email}
                        onChange={handleChange}
                        className="inputField" />
                </p>

                <p>
                    <input
                        type="text"
                        name="bio"
                        placeholder={bio}
                        value={bio}
                        onChange={handleChange}
                        className="inputField" />
                </p>

                <p id='bunnyedit'>what color do you like your bunease?</p>

                <p>
                    <input
                        type="color"
                        name="pp"
                        placeholder={pp ? pp : '#FFFF00'}
                        value={pp ? `${pp}` : '#FFFF00'}
                        onChange={handleChange}
                        className="inputField" />
                </p>

                <p>
                    <input
                        type='submit'
                        value='submit'
                        id='submit' 
                    />
                </p>

            </form>

        </div>
    );

}

export default EditUserProfile;