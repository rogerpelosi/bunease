import { useState } from 'react'; 

import { useHistory, Link } from 'react-router-dom';

function Signup({ setCurrentUser }) {

    const history = useHistory();

    const [signupData, setSignupData] = useState({username: '', password: '', password_confirmation: '', email: ''});

    const {username, password, password_confirmation, email} = signupData;

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
        <div className='home'>
        <div className="static">

            <h1 className='logo'>bunease©</h1>

            <form onSubmit={handleSignup} className='form'>

                {/* <h1>sign up</h1> */}

                <div className='signupInputs'>

                    <p>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    {/* <p>
                        <input
                            type="text"
                            name="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p> */}

                    <p>
                        <input
                            type="text"
                            name="password"
                            placeholder='password'
                            value={password}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <input
                            type="text"
                            name="password_confirmation"
                            placeholder='confirm pass...'
                            value={password_confirmation}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <input
                            type="text"
                            name="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <button className="signupButton" type="submit">
                            sign up
                        </button>
                    </p>

                    <p className="or">
                        <Link className="loginButton" to="/api/login">
                        or login
                        </Link>
                    </p>

                </div>

            </form>

        </div>
        </div>
    );

}

export default Signup;