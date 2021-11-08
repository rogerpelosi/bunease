import { Link, useHistory } from 'react-router-dom';

function Navigation() {

    let history = useHistory();

    return (
        <div>

            <nav>

                <Link to='/me' onClick={() => history.push('/me')}>
                    me
                </Link><br />

                <Link to='/users' onClick={() => history.push('/users')}>
                    search
                </Link><br />

                <Link to='/posts' onClick={() => history.push('/posts')}>
                    chums
                </Link>

            </nav>

        </div>
    );

}

export default Navigation;