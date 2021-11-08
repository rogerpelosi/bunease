import { useHistory } from 'react-router-dom';

function StaticContainer({ data, dataType }) {

    let history = useHistory();

    if (dataType === 'user') {
        return (
            <div className="static">

                <div className="userData">
                    <h2>name: {`${data.name}`.toLowerCase()}</h2>
                    <h2>username: {`${data.username}`.toLowerCase()}</h2>
                    <h2>email: {`${data.email}`.toLowerCase()}</h2>
                    <h3>bio: "{`${data.bio}`.toLowerCase()}"</h3>
                </div>

                <button onClick={() => history.push('/me/edit')}>
                    edit
                </button>

            </div>
        );
    } else if (dataType === 'chums') {
        return (
            <div className="static">

                <div className="chumData">
                    
                    {data.map(chum => 
                        <div className="chum" key={chum.username}>
                            <h3>{`${chum.username}`.toLowerCase()} {`${chum.name}`.toLowerCase()}</h3>
                            {/* <h3>{`${chum.name}`.toLowerCase()}</h3> */}
                        </div>)}

                </div>

            </div>
        );
    }

    return (
        <div>
            <h2>poop</h2>
        </div>
    );

}

export default StaticContainer;