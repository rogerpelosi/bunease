import { Link, useHistory } from 'react-router-dom';
import CloudinaryUpload from './CloudinaryUpload';
import {ReactComponent as Bunny} from './bunny.svg';

// import Navigation from './Navigation';

// this is intended to be a static div that holds a chum list or current user data, will be approx the same size as login and sign up divs as well

function StaticContainer({ data, dataType, handleUnFollow, handleUpload }) {

    let history = useHistory();

    const color = data.pp ? data.pp : 'rgb(0, 187, 255)';
    const bio = data.bio === '' || data.bio === null ? 'say literally anything' : data.bio;

    if (dataType === 'user' || dataType === 'edituser') {
        return (
            <div className="StaticContainer">
            <div className="static" id='internalstatic'>

                {/* <Navigation /> */}
                <h2>how's it hanging, {data.username}?</h2><br />

                <div className='pp' >
                    {/* style={{backgroundColor: data.pp ?
                                                             data.pp :
                                                             '#FFFF00'}}> */}
                    <Bunny id='bunny' style={{fill: color}} />
                </div>

                <div className="userData">
                    <h2>name: {`${data.name}`.toLowerCase()}</h2>
                    <h2>username: {`${data.username}`.toLowerCase()}</h2>
                    <h2>email: {`${data.email}`.toLowerCase()}</h2>
                    <h3>say something: "{`${bio}`.toLowerCase()}"</h3>
                    <label for="mood">set your mood:</label>
                    <select name="mood" id="mood">
                        <option value="volvo">🐇</option>
                        <option value="volvo">😡</option>
                        <option value="saab">😈</option>
                        <option value="opel">🙂</option>
                        <option value="audi">🥲</option>
                        <option value="audi">🤪</option>
                        <option value="audi">😒</option>
                        <option value="audi">😮‍💨</option>
                        <option value="audi">🤢</option>
                        <option value="audi">🥵</option>
                        <option value="audi">🥶</option>
                        <option value="audi">🥳</option>
                        <option value="audi">😳</option>
                        <option value="audi">💩</option>
                        <option value="audi">😕</option>
                        <option value="volvo">🕳️</option>
                    </select>
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
            </div>
        );
    } else if (dataType === 'chums') {
        return (
            <div className="static" id='internalstatic'>

                <div className="chumData">

                    <h1>your chums</h1><br />
                    <div className="chumcontainer">
                        {data.map(chum => 
                        <div className="chumbuttoncont" key={chum.username}>
                        <div className="chumlist" key={chum.username}>
                            <Link to={`/users/${chum.id}`}>
                                <h3>👥 {`${chum.username}`.toLowerCase()}</h3>
                            </Link>
                            <h3 className='chumname'>{`${chum.name === null || chum.name === '' ? 
                                    'noname' : chum.name}`.toLowerCase()}</h3>
                            {/* <button onClick={() => handleUnFollow(chum)}>remove</button> */}
                        </div>
                        <button onClick={() => handleUnFollow(chum)}>remove</button>
                        </div>
                        )}
                    </div>

                </div>

            </div>
        );
    }

}

export default StaticContainer;