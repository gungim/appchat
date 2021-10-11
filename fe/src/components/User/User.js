import React, { useState } from "react";
import Account from "./Account";
import Other from "./Other";
import "./user.css";

function User() {
  const [name, setName] = useState("Account");
  return (
    <div className="setting-container">
      <div className="menu-bar">
        <div className="menu-header menu-item">Cài đặt người dùng</div>
        <div className="menu-item" onClick={() => setName("Account")}>
          Tài khoản của tôi
        </div>
        <div className="menu-item" onClick={() => setName("Other")}>
          Other
        </div>
      </div>
      <div className="content-rigison">
        {name === "Account" && <Account />}
        {name === "Other" && <Other />}
      </div>
    </div>
  );
}

export default User;
