import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import Waiters from "./Component/Waiters";
import Kitchen from "./Component/context/Kitchen";



function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path="/waiters" element= {<Waiters/>} />
          <Route path="/kitchen" element= {<Kitchen/>} />
          
            
        </Routes>
      </BrowserRouter>
  );
}

export default App;
