import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import Waiters from "./Component/Waiters";



function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path="/waiters" element= {<Waiters/>} />
          
            
        </Routes>
      </BrowserRouter>
  );
}

export default App;
