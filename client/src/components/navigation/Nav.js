import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions";
import "./Nav.scss";

function Nav() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  return (
    <div className="navbar">
      <h1>LetsPlay!</h1>
      {user.authenticated ? <div className="searchBar"> </div> : ""}
      {user.authenticated ? (
        <div className="userNav">
          <h4>Welcome {user.username}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
