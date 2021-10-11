import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../helpers/history";
import { logout } from "../../actions/auth.actions";
import { Link } from "react-router-dom";

function Header() {
  const { user: currendUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");

    window.location.reload();
  };
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <Link to={`/user/${currendUser.user.id}`}>
              <img
                src={
                  currendUser.user.image
                    ? currendUser.user.image
                    : "https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
                }
                alt=""
              />
              <p className="user-name">{currendUser?.user.username}</p>
            </Link>
          </div>
          <input
            type="button"
            onClick={handleLogout}
            className="logout"
            value="Logout"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
