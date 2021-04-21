import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ADMIN_ROLE, TRAINER_ROLE, USER_ROLE } from "../../../../constants/permissionsConstants";
import { PostData } from "../../../../services/PostData";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState('');
  const [accessError, setAccessError] = useState(false);

  const login = () => {
    if (!email) {
      document.getElementById('email').placeholder = "Campo vacío ";
      document.getElementById('email').classList.add("text-error");
    }

    if (!password) {
      document.getElementById('password').placeholder = "Campo vacío ";
      document.getElementById('password').classList.add("text-error");
    }

    if (email && password) {
      PostData("login", { email: email, password: password }).then(result => {
        let responseJSON = result;

        if (responseJSON.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJSON));
          setType(responseJSON.userData.type);
          setRedirect(true)
        } else {
          setAccessError(true);
        }
      });

    }
  }

  if (redirect) {
    if (sessionStorage.getItem("userData")) {
      switch (type) {
        case ADMIN_ROLE:
          return <Redirect to="/admin" />;
        case TRAINER_ROLE:
          return <Redirect to="/trainer" />;
        case USER_ROLE:
          return <Redirect to="/user" />;
        default:
          return;
      }
    }
  }

  return (
    <div className="top-bar">

      <input
        id="email"
        type="email"
        className="email"
        name="email"
        maxLength="40"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="off"
      />

      <input
        id="password"
        type="password"
        className="password"
        name="password"
        maxLength="15"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        autoComplete="off"
      />

      <button
        className="boton"
        type="submit"
        name="submit"
        onClick={login}
      >
        Entrar
        </button>
      <div className="error-container">
        {accessError === true ?
          <p className="login-error"><i className="fas fa-exclamation-circle"></i> Usuario y/o contraseña incorrectos</p> : ''
        }
      </div>
    </div>
  );
}

export default Login;