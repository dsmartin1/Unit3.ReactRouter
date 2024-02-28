import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Green from "./components/Green";
import './App.css'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">To home</Link>
          <Link to="/blue">To blue</Link>
          <Link to="/red" >To red</Link>
          <Link to="/green" >To green</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={
              <Home />
            }/>
            <Route path="/blue" element={
              <Blue />
            } />
            <Route path="/red" element={
              <Red />
            } />
          <Route path="/green" element={
              <Green />
            } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
