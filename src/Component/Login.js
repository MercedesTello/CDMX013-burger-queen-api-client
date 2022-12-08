import React, { useEffect, useState } from "react";
import burger from "../Component/Image/burger.png";
import { useNavigate } from "react-router-dom";
import AlertLogin from "./Alert";

/*const LoginButton = () => {
  const [user, setUser] = useState();
  
  
  useEffect(() => {
    fetch("https://63799c1e7eb4705cf282218b.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  
  const handleLoginClick = (name, password) => {
    fetch(
      `https://63799c1e7eb4705cf282218b.mockapi.io/users?name=${name}&password${password}`
    )
      .then((response) => response.json())
      .then((data) =>console.log((data.length ? setUser(data[0]) : setUser(undefined))));
      
  };
  return (
    <button id="enter" onClick={() => handleLoginClick("name 2", "password 2")}>
      Entrar
    </button>
  );
};*/
function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState(); // TODO:¨este estado debe estar disponible para toda la aplicacion
  const [password, setPassword] = useState("");
  const [userMail, setUserMail] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserMail = (e) => {
    setUserMail(e.target.value);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();

    fetch(
      `https://63799c1e7eb4705cf282218b.mockapi.io/users?correo=${userMail}&password=${password}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setUser(data[0]);
          //
        } else {
          setUser(AlertLogin()); // TODO:¨revisar
        }
      });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    //console.log("shoy indefinio");
      if (user !== undefined) {
        //console.log("ya no soy indefinido", user);
        if (user.rol === "waiter") {
          navigate("/waiters");
        }
        if (user.rol === "Admin") {
          navigate("/admin");
        }
    }
  }, [user]);

  return (
    <div className="flex-box">
      <div className="main">
        <h1>Burger Queen </h1>
        <img src={burger} className="Burger-logo" alt="logo" />
        <p id="description">Somos la plataforma que levanta pedidos</p>
      </div>
      <div className="container">
        <form>
          <h3 id="title">Login {user ? `hola ${user.name}` : null} </h3>
          <h3 id="user">Correo</h3>
          <input
            type="email"
            className="email"
            value={userMail}
            onChange={handleUserMail}
          />
          <h3 id="pass">Contraseña</h3>
          <input
            type="password"
            className="password"
            value={password}
            onChange={handlePassword}
          />

          <button id="enter" onClick={(e) => handleLoginClick(e)}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
