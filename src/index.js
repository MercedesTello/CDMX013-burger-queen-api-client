import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { useState } from "react";
import Login from "./Component/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <Login />
    {/*alert('Por favor, ingresa tu usuario y contraseña')*/}
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
