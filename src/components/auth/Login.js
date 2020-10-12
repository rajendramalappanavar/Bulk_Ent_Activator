import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

import ErrorNotice from "../misc/ErrorNotice";
import Loading from "./Loading";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loadinig, setLoading] = useState(false);
  const [login, setLogin] = useState("Log in");
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLogin(" ");
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      console.log(loginRes)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      setLoading(false);
      history.push("/");
    } catch (err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page" id="container1">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>

        <div className="container mt-4">
          <div className="card">
            <div className="card-header">
              Login
            </div>
            <div className="card-body">

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </div>
          </div>
          <br/>
         {loadinig && (
        <Loading />
        )}
          {/*{{#if message}}*/}
          {/*<h4 className="alert alert-danger mt-4">{{message}}</h4>*/}
          {/*{{/if}}*/}
            </div>

      </form>
    </div>
  );
}