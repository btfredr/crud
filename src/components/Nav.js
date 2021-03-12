import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Nav = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(false);

  const history = useHistory();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setAuth(null);
      history.push("/");
    }
  };

  return (
    <nav className="nav">
      <div className="nav-links">
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
            </Link>
            <button onClick={logout} className="logout">
              Log out
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-item">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
