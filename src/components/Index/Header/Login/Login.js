import React, { Component } from "react";
import { Redirect } from "react-router-dom";

/* FUNCIONES */
import { PostData } from "../../../../services/PostData";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
      type: ''
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.email && this.state.password) {
      PostData("login", this.state).then(result => {
        let responseJSON = result;

        if (responseJSON.userData) {

          // Pasa los datos en sessión
          sessionStorage.setItem("userData", JSON.stringify(responseJSON));

          /* Logeo satisfactorio */
          this.setState({
            type: responseJSON.userData.type,
            isLogged: true,
            redirect: true
          });
        } else {
          /* Acceso denegado */
          console.log("no entras");
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      //Con e.target.name, recogemos el valor según el name del input
      [e.target.name]: e.target.value
    });
  }

  render() {
    // Redirige a la página cuando el usuario haya sido logeado
    if (this.state.redirect) {
      if (sessionStorage.getItem("userData")) {

        // Redirige a la página del administrador
        if (this.state.type === 'admin') {
          return <Redirect to="/admin" />;
        }

        // Redirige a la página del entrenador
        if (this.state.type === 'trainer') {
          return <Redirect to="/trainer" />;
        }

        // Redirige a la página de clientes
        if (this.state.type === 'user') {
          return <Redirect to="/user" />;
        }
      }
    }

    return (
      <div className="col-12 d-flex justify-content-end">
        <div className="col-lg-6 pt-4 pb-5 row">

          <input
            type="email"
            className="form-control col-5 email"
            placeholder="Email"
            name="email"
            maxLength="40"
            onChange={this.onChange}
            autoComplete="off"
          />

          <input
            type="password"
            className="form-control col-4 ml-2 mr-2 password"
            id="password"
            placeholder="Contraseña"
            name="password"
            maxLength="15"
            onChange={this.onChange}
            autoComplete="off"
          />

          <button
            type="submit"
            name="submit"
            className="btn btn-red"
            onClick={this.login}
          >
            Entrar <i className="fas fa-sign-in-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}
