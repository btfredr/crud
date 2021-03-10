import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Nav = () => {
    const [auth, setAuth] = useContext(AuthContext);

    const history = useHistory();

    const logout = () => {
        setAuth(null);
        history.push('/');
    };


    return (
        <nav>
            <Link to='/'>Home</Link>
            {auth ? (
                <>
                    <Link to='/products'>Products</Link> | {' '}
                    <button onClick={logout}>Log out</button>
                </>
            ) : (
                <Link to='/login'>Login</Link>
            )}
        </nav>
    );
};

export default Nav