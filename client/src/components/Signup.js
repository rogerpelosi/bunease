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
        <div className="signup">

            <form onSubmit={handleSignup}>

                <h1>sign up</h1>

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
                            placeholder='confirm password'
                            value={password_confirmation}
                            onChange={(e) => setSignupData({...signupData, [e.target.name]: e.target.value})}
                            className="inputField" />
                    </p>

                    <p>
                        <button className="signupButton" type="submit">
                            sign up
                        </button>
                    </p>

                    <p>or</p>

                    <p>
                        <Link className="loginButton" to="/api/login">
                            login
                        </Link>
                    </p>

                </div>

            </form>

        </div>
    );

}

export default Signup;