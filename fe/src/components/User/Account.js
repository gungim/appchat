import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateUsername from "./UpdateUsername";
import UpdatePassword from "./UpdatePassword";
import "./account.css";

function Account({}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const [showComponent, setShowComponent] = useState("");

  const handleClickUsername = () => {
    setIsOpen(true);
    setShowComponent("username");
  };
  const handleClickPassword = () => {
    setIsOpen(true);
    setShowComponent("password");
  };

  return (
    <div className="account">
      <h1 className="account-title">Tai khoan cua toi</h1>
      <div className="account-container">
        <div className="account-header">
          <div className="account-img-container">
            <div className="">
              <img
                src="https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
                alt=""
                className="account-img"
              />
              <p className="account-name">{currentUser.user.username}</p>
            </div>
            <button className="btn btn-primary">Cap nhat anh</button>
          </div>
        </div>
        <div className="account-content">
          <div className="account-edit">
            <div>
              <p className="edit-title">TEN DANG NHAP</p>
              <p className="edit-content"> {currentUser.user.username}</p>
            </div>
            <button className="btn btn-edit" onClick={handleClickUsername}>
              Chinh sửa
            </button>
          </div>
        </div>
        <button
          className="btn btn-edit btn-edit-password"
          onClick={handleClickPassword}
        >
          Doi mat khau
        </button>
        {isOpen && showComponent === "username" && (
          <UpdateUsername
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            currentUser={currentUser}
          />
        )}
        {isOpen && showComponent === "password" && (
          <UpdatePassword
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            currentUser={currentUser}
          />
        )}
      </div>
    </div>
  );
}

export default Account;
