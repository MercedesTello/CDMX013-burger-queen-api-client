import React, { useEffect, useState } from 'react';
import burger from '../Component/burger.png';
import Swal from 'sweetalert2';
//import { useNavigate } from 'react-router-dom'

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
const AlertLogin = () => {
  Swal.fire({
    title: 'Lo sentimos, tus datos son incorrectos',
    text: 'Por favor, ingresa tus datos correctamente',
    imageUrl: 'https://thumbs.gfycat.com/GoodnaturedShimmeringHuia-max-1mb.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}


function Login() {
  //const history= useNavigate();
  //const handleClick= () =>{
    //history.push('/Waiters')
  //}
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
  
  const handleLoginClick = (e) => {
    e.preventDefault()

    fetch(
      `https://63799c1e7eb4705cf282218b.mockapi.io/users?name=${userName}&password=${password}`
      )
      .then((response) => (response.json()))
      .then((data) => (data.length ? setUser(data[0]) : setUser(AlertLogin())));
      
  };


  return (
    <div className="flex-box">
      <div className="main">
        <h1>Burger Queen </h1>
        <img src={burger} className="Burger-logo" alt="logo" />
        <p>Somos la plataforma que levanta pedidos</p>
      </div>
      <div className="container">
        <form onSubmit={(e) => {}}>
          <h3 id="title">Login {user ? `hola ${user.name}` : null} </h3>
          <h3 id="user">Usuario</h3>
          <input className="userName"
          value = {userName} onChange= {handleUserName} />
          <h3 id="pass">Contraseña</h3>
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
