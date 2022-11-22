import React, { useEffect, useState } from "react";
import burger from "../Component/burger.png";

const LoginButton = () => {
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
};

function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handlePassword= (e) =>{
    setPassword(e.target.value)
  }

  const handleUserName= (e) =>{
    setUserName(e.target.value)
  }
  useEffect(() => {
    fetch("https://63799c1e7eb4705cf282218b.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
  }, []);
  
  const handleLoginClick = (e, name, passwords) => {
    e.preventDefault()
    console.log({password, userName})
    fetch(
      `https://63799c1e7eb4705cf282218b.mockapi.io/users?name=${name}&password${passwords}`
      )
      .then((response) => response.json())
      .then((data) => (data.length ? setUser(data[0]) : setUser(undefined)));
  };

  return (
    <div className="flex-box">
      <div className="main">
        <h1>Burger Queen {user ? `hola ${user.name}` : null}</h1>
        <img src={burger} className="Burger-logo" alt="logo" />
        <p>Somos la plataforma que levanta pedidos</p>
      </div>
      <div className="container">
        <form onSubmit={(e) => {}}>
          <h3 id="title">Login</h3>
          <h3 id="user">User</h3>
          <input className="userName"
          value = {userName} onChange= {handleUserName} />
          <h3 id="pass">Password</h3>
          <input type="password" 
            className="password" 
            value = {password} onChange= {handlePassword}/>

          <button
            id="enter"
            onClick= {(e)=> handleLoginClick(e)} //e,"name 2", "password 2"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
