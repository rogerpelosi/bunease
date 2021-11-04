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
        <div className="login">

            <Redirect to='/' /> 

            <form onSubmit={handleLogin}>

                <h1>LOGIN</h1>

                <div className='loginInputs'>

                    <p>
                        <label className="label">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="inputField" />
                    </p>

                    <p>
                        <label className='label'>
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputField" />
                    </p>

                    <p>
                        <button className="loginButton" type="submit">
                            LOGIN
                        </button>
                    </p>

                    <p>OR</p>

                    <p>
                        <Link className='signupButton' to='/api/signup'>
                            SIGN UP
                        </Link>
                    </p>

                </div>

            </form>

        </div>
    );

}

export default Login;