import { useState } from "react";
import { useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";
import { useContext } from "react";
import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
 const {user, dispatch} = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({type: 'LOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type: 'LOGIN', username: 'Hiba.Shahid'})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;