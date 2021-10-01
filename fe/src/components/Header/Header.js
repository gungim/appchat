import React from "react";
import { getUser, removeUserSession } from "../../Utils/Common";
import "./header.css";
import { useHistory } from "react-router-dom";

function Header() {
  const user = getUser();
  const history = useHistory();
  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <img
              src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/159547536_502495580915490_4903354481532451655_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_DT5k9E-vlQAX_Sc45K&_nc_ht=scontent.fhan5-4.fna&oh=fcfc37b0717a916f72765314e435d148&oe=6179EFB2"
              alt=""
            />
            <p className="user-name">{user.username}</p>
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
