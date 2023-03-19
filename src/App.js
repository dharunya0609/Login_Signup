import Home from "./Components/Home";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import { useState } from "react";

export default function App()
{
  return(<div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>

  </div>)
}