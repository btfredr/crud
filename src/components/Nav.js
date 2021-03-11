import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Nav = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const logout = () => {
    setAuth(null);
    history.push("/");
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-item">
        Home
      </Link>
      {auth ? (
        <>
          <Link to="/products" className="nav-item">
            Products
          </Link>
          <Link to="/add" className="nav-item">
            Add Products
          </Link>{" "}
          |{" "}
          <button onClick={logout} className="nav-btn">
            Log out
          </button>
        </>
      ) : (
        <Link to="/login" className="nav-item">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Nav;
