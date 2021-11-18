import { Link, useHistory } from 'react-router-dom';
// import CloudinaryUpload from './CloudinaryUpload'

function Navigation() {

    let history = useHistory();

    // const handleUpload = (result) => {
    //     const body = {
    //       image: result.info.secure_url,
    //       thumb: result.info.eager[0].secure_url
    //     }
    //     fetch('/api/posts', {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(body)
    //     })
    //       .then(res => res.json())
    //       .then(user => {
    //         console.log(user);
    //         // setCurrentUser(user)
    //       })
    //   }

    return (
        <div>

            <nav id='nav'>

                <Link to='/me' onClick={() => history.push('/me')}>
                    me
                </Link><br />

                <Link to='/users' onClick={() => history.push('/users')}>
                    search
                </Link><br />

                <Link to='/posts' onClick={() => history.push('/posts')}>
                    chums
                </Link><br />

                {/* <CloudinaryUpload
                    preset="jz79ayen"
                    buttonText="post"
                    handleUpload={handleUpload}
                /> */}

                <Link to='/me' onClick={() => history.push('/me')}>faq</Link>

            </nav>

        </div>
    );

}

export default Navigation;