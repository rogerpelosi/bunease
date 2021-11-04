import { useState } from 'react'; 

import { useHistory, Link } from 'react-router-dom';

function Signup({ setCurrentUser }) {

    const history = useHistory();

    const [signupData, setSignupData] = useState({username: '', password: '', password_confirmation: '', email: '', name: '', bio: '', pp: ''});

    const {username, password, password_confirmation, email, name, bio, pp} = signupData;

    const handleSignup = (event) => {
        event.preventDefault();
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData)
        })
        .then(
            res => {
                if (res.ok) {
                  res.json().then(user => {
                    setCurrentUser(user)
                    history.push('/me')
                  })
                } else {
                  res.json().then(errors => {
                    console.error(errors)
                  })
                }
              }
        )
    };

    return (
        <div className="signup">

            <form onSubmit={handleSignup}>

                <h1>SIGN UP</h1>

                <div className='signupInputs'>

                    <p>
                        <label className='label'>
                            NAME
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            USERNAME
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            EMAIL 
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            BIO
                        </label>
                        <input
                            type="text"
                            name="bio"
                            value={bio}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            PROFILE PICTURE
                        </label>
                        <input
                            type="text"
                            name="pp"
                            value={pp}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            PASSWORD
                        </label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            CONFIRM PASSWORD
                        </label>
                        <input
                            type="text"
                            name="password_confirmation"
                            value={password_confirmation}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <button className="signupButton" type="submit">
                            SIGN UP
                        </button>
                    </p>

                    <p>OR</p>

                    <p>
                        <Link className="loginButton" to="/api/login">
                            LOGIN
                        </Link>
                    </p>

                </div>

            </form>

        </div>
    );

}

export default Signup;