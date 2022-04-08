import { Button } from "react-bootstrap";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* <Route path="/checkout" element={<Register/>}/> */}
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
