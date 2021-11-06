

function StaticContainer({ data, dataType }) {

    if (dataType === 'user') {
        return (
            <div className="StaticContainer">

                <div className="userData">
                    <h2>name: {data.name}</h2>
                    <h2>username: {data.username}</h2>
                    <h2>email: {data.email}</h2>
                    <h3>bio: "{data.bio}"</h3>
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