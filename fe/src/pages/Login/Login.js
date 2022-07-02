import React, { useState, useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.actions";
import { history } from "../../helpers/history";
import { Input } from "../../styled";

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user: currendUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currendUser) {
      props.history.push("/tasks");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(user))
      .then(() => {
        history.push("/tasks");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        setError("Ten tai khoan hoac mat khau khong dung");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png "
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <Input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <Input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />

        <input
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleSubmit}
          disabled={loading}
          className="button"
        />
        <br />
      </div>

      <div className="container">
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          Forgot <a href="/">password?</a>
        </span>
      </div>
    </form>
  );
}

export default Login;
