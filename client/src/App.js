import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    fetch('/api/me', {
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          setAuthCheck(true)
        })
      } else {
        setAuthCheck(true)
      }
    })
  }, [setCurrentUser])

  if(!authCheck) { return <div>Loading...</div>}

  return (
    <div className="App">

      <BrowserRouter>

        {currentUser ? 
          (
          <Authenticated 
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} />
          ) : (
          <UnAuthenticated 
            setCurrentUser={setCurrentUser} />
          )
        }

      </BrowserRouter>

    </div>
  );

}

export default App;
