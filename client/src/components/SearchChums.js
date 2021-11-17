import { Link } from 'react-router-dom';

function SearchChums({ search, setSearch, chums }) {

    const searchedChums = chums.map(chum => {
        return <div className="chum" key={chum.id}>
                    <Link to={`/users/${chum.id}`}>
                    🐰 {`${chum.username}`.toLowerCase()} 
                    {`${chum.name}`.toLowerCase()} 
                    </Link>
                    <br /><br />
                </div>})

    return (
        <div className="search">

            <input
                type="text"
                placeholder="search chums"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="search_input"
            /><br />

            {search.length === 0 ?
                <p>try searching by username</p> :
                (searchedChums.length > 0 ?
                    <p>results:</p> :
                    <p>no luck :3</p>)}

            {
                search.length === 0 ? 
                null :
                (searchedChums.length > 0 ? 
                 searchedChums : 
                null)
            }

        </div>
    );

}

export default SearchChums;