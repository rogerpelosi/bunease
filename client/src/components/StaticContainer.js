import { Link, useHistory } from 'react-router-dom';
import CloudinaryUpload from './CloudinaryUpload';
import {ReactComponent as Bunny} from './bunny.svg';

import Navigation from './Navigation';

// this is intended to be a static div that holds a chum list or current user data, will be approx the same size as login and sign up divs as well

function StaticContainer({ data, dataType, handleUnFollow, handleUpload }) {

    let history = useHistory();

    if (dataType === 'user' || dataType === 'edituser') {
        return (
            <div className="static">

                <Navigation />

                <div className='pp' >
                    {/* style={{backgroundColor: data.pp ?
                                                             data.pp :
                                                             '#FFFF00'}}> */}
                    <Bunny id='bunny' style={{fill: data.pp}} />
                </div>

                <div className="userData">
                    <h2>name: {`${data.name}`.toLowerCase()}</h2>
                    <h2>username: {`${data.username}`.toLowerCase()}</h2>
                    <h2>email: {`${data.email}`.toLowerCase()}</h2>
                    <h3>bio: "{`${data.bio}`.toLowerCase()}"</h3>
                </div>

                {
                    dataType === 'edituser'? 
                    null :
                    (<button onClick={() => history.push('/me/edit')}>
                        edit
                    </button>)
                }

                {
                   dataType === 'edituser'?
                   null :
                   (<CloudinaryUpload
                    preset="jz79ayen"
                    buttonText="new post"
                    handleUpload={handleUpload} />)
                }

            </div>
        );
    } else if (dataType === 'chums') {
        return (
            <div className="static">

                <Navigation />

                <div className="chumData">

                    <h1>your chums</h1>
                    
                    {data.map(chum => 
                        <div className="chum" key={chum.username}>
                            <Link to={`/users/${chum.id}`}>
                                <h3>{`${chum.username}`.toLowerCase()}</h3>
                            </Link>
                            <h3>{`${chum.name}`.toLowerCase()}</h3>
                            <button onClick={() => handleUnFollow(chum)}>remove</button>
                        </div>)}

                </div>

            </div>
        );
    }

}

export default StaticContainer;