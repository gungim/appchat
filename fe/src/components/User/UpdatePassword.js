import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/auth.actions";

function UpdateUsername({ setIsOpen, isOpen, currentUser }) {
  const [user, setUser] = useState({
    id: currentUser.user.id,
    password: "",
    newPassword: "",
  });
  const [error, setError] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (user.password === "") setError(false);
    else {
      dispatch(updateUser(user)).then(() => {
        setIsOpen(!isOpen);
      });
    }
  };

  return (
    <div className="update">
      <div className="update-header">
        <h1>Doi mat khau</h1>
        <p>Nhap mat khau cu va mat khau moi</p>
      </div>
      <div className="update-container">
        <div className="update-content">
          <label>
            <p>Mat khau hien tai</p>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </label>
          <label>
            <p>Mat khau moi</p>
            <input
              type="text"
              onChange={(e) =>
                setUser({ ...user, newPassword: e.target.value })
              }
            />
          </label>
          <div className="error-msg">
            {error ? "" : <p>Vui long nhap mat khau</p>}
          </div>
          <div className="button-container">
            <button
              className="btn btn-cancel"
              onClick={() => setIsOpen(!isOpen)}
            >
              Huy
            </button>
            <button className="btn btn-update" onClick={handleSubmit}>
              Cap nhat
            </button>
          </div>
        </div>
        <button className="btn-close" onClick={() => setIsOpen(!isOpen)}>
          X
        </button>
      </div>
    </div>
  );
}
export default UpdateUsername;
