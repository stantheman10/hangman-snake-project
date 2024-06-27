import React from "react";
import Hangman from "./components/Hangman";
import { Routes,Route } from "react-router-dom"
import Nav from "./components/Nav";
import SnakeGame from "./components/SnakeGame";
import "./components/index.css"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Nav/>}/>  
      <Route path="/hangman" element={ <Hangman/>}/>
      <Route path="/snake" element={ <SnakeGame/>}/>
      </Routes>
    </div>
  );
}

export default App;
