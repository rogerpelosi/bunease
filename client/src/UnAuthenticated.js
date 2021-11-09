import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

function UnAuthenticated({ setCurrentUser }) {

    return (
        <div className="unauthapp">

            <Switch>

                <Route exact path='/api/login'>
                    <Login setCurrentUser={setCurrentUser} />
                </Route>

                <Route exact path='/api/signup'>
                    <Signup setCurrentUser={setCurrentUser} />
                </Route>

                <Redirect to='/' />

            </Switch>

        </div>
    );

}

export default UnAuthenticated;