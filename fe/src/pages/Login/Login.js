import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";
import "./Login.css";

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await axios
      .post("http://localhost:3000/api/v1/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Something went wrong. Please try again later.");
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
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
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
