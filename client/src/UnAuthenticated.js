import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react'; 

import Login from './components/Login';
import Signup from './components/Signup';

function UnAuthenticated({ setCurrentUser }) {

    const [errors, setErrors] = useState(null);

    return (
        <div className="unauthapp">

            <Switch>

                <Route exact path='/api/login'>
                    <Login setCurrentUser={setCurrentUser} errors={errors} setErrors={setErrors} />
                </Route>

                <Route exact path='/api/signup'>
                    <Signup setCurrentUser={setCurrentUser} errors={errors} setErrors={setErrors} />
                </Route>

                <Redirect to='/' />

            </Switch>

        </div>
    );

}

export default UnAuthenticated;