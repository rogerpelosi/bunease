import { useState } from 'react'; 

import { Redirect, Link, useHistory } from 'react-router-dom';

function Login({ setCurrentUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        fetch(`/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        .then(res => {
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
        })
    };

    return (

        <div className="home">

            <div className="unauthnav">

            <Link className="loginButton" to="/api/login">
                login
            </Link>

            <Link id='signupButton' to='/api/signup'>
                sign up
            </Link>

            </div>

        <div className="static">

            <h1 className='logo'>bunease©</h1>

            <Redirect to='/api/login' /> 

            <form onSubmit={handleLogin} className='form'>

                {/* <h1>login</h1> */}

                <div className='loginInputs'>

                    <p>
                        <input
                            type="text"
                            name="username"
                            placeholder='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="inputField" />
                    </p>

                    <p>
                        <input
                            type="password"
                            name="password"
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputField" />
                    </p>

                    <p>
                        <button className="loginButton" type="submit">
                            login
                        </button>
                    </p>

                    {/* <p className='or'>
                        <Link className='signupButton' to='/api/signup'>
                        or sign up
                        </Link>
                    </p> */}

                </div>

            </form>

        </div>
        </div>
    );

}

export default Login;