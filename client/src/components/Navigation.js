import { Link, useHistory } from 'react-router-dom';

function Navigation({  }) {

    let history = useHistory();

    return (
        <div>

            <nav>

                <Link to='/me' onClick={() => history.push('/me')}>
                    mine
                </Link><br />

                <Link to='/posts' onClick={() => history.push('/posts')}>
                    chums
                </Link>

            </nav>

        </div>
    );

}

export default Navigation;