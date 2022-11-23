import { Routes, Route, Link } from "react-router-dom";

import Login from './Component/Login';
import  Waiters from './Component/Waiters';

  
  function App() {
    return (
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="waiters" element={<Waiters />} />
        </Routes>
      </div>
    );
  }


export default App;
