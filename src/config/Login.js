import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
  };
  // const signInFb = () => {};
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png"
          alt="Twitter Login"
        />
        <div className="login__text">
          <h1>Sign in to Twitter</h1>
        </div>

        <Button onClick={signIn}>Sign in With Google</Button>
        {/* <Button onClick={signInFb}>Sign in With Facebook</Button> */}
      </div>
    </div>
  );
}

export default Login;
