import './App.css';
import React from 'react';
import Home from './components/Home';
import Community from './components/community';
import About from './components/About';
import Create from './components/Create-projects';
import Browse from './components/Browse-projects';
import Contact from './components/Contact';
import Login from './components/Login';
import Terms from './components/terms';
import Privacy from './components/privacy';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/community" Component={Community}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/browse" Component={Browse}></Route>
          <Route path="/create" Component={Create}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/terms" Component={Terms}></Route>
          <Route path="/privacy" Component={Privacy}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
