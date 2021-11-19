import { Link, useHistory } from 'react-router-dom';

import CloudinaryUpload from './CloudinaryUpload';

import {ReactComponent as Bunny} from './bunny.svg';
import {ReactComponent as Squiggle} from './squiggle.svg';
import {ReactComponent as Arrow} from './arrow.svg';

// import Navigation from './Navigation';

// this is intended to be a static div that holds a chum list or current user data, will be approx the same size as login and sign up divs as well

function StaticContainer({ data, dataType, handleUnFollow, handleUpload }) {

    let history = useHistory();

    // const color = data.pp ? data.pp : 'rgb(0, 187, 255)';
    // const bio = data.bio === '' || data.bio === null ? 'say literally anything' : data.bio;

    if (dataType === 'user' || dataType === 'edituser') {

        const color = data.pp ? data.pp : 'rgb(0, 187, 255)';
        const bio = data.bio === '' || data.bio === null ? 'say literally anything' : data.bio;

        return (
            <div className="StaticContainer">
            <div className="static">

                {/* <Navigation /> */}
                <h2 id='greetinguser'>👋 how's it hanging, {`${data.name}`.toLowerCase()}?</h2><br />

                <Squiggle id='squiggle' style={{fill: color}}/>

                <div className='pp' >
                    {/* style={{backgroundColor: data.pp ?
                                                             data.pp :
                                                             '#FFFF00'}}> */}
                    <Bunny id='bunny' style={{fill: color}} />
                </div>

                <div className="userData">
                    <h2>👤 username: {`${data.username}`.toLowerCase()}</h2>
                    <h2>📧 email: {`${data.email}`.toLowerCase()}</h2>
                    <h3>💬 say something: "{`${bio}`.toLowerCase()}"</h3>
                    {
                    dataType === 'edituser' ? null :
                    (<div>
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
                        <option value="volvo">🤡</option>
                            </select>
                    </div>)
                    }
                </div><br /><br />

                {
                    dataType === 'edituser'? 
                    null :
                    (<button id='edit' onClick={() => history.push('/me/edit')}>
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

        const color = data.pp ? data.pp : 'rgb(0, 187, 255)';

        return (
            <div className="static">

                <div className="chumData">

                    <h1>👯 your chums</h1><br />
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

                    <Arrow className='arrow' style={{fill: color}}/>

                </div>

            </div>
        );
    } else if(dataType === 'faq') {
        return (
            <div className='static'>
                
                <h2 className='faq'>🌰 bunease is intended to be an ultra-simplistic platform that allows us to connect. my hope is that bunease can offer a respite to users, without over stimulation/complication/whelmation</h2>

                <h2 className='faq'>🌱 the site offers rather basic features, and can be read as a bootleg, modern day social media, or perhaps an ode to eariler site design & functionality</h2>

                <h2 className='faq'>🪴 what's to come? bunease hopes to keep its simple legacy, with intentions of adding text posts (thanks tumblr), and some 'basic necessities' on the way</h2><br />

                <h2 className='thx'>💗 thank you, bunease (yes you!)</h2>

            </div>
        )
    }

}

export default StaticContainer;