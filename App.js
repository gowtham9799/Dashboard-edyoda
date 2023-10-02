import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';
import Homepage from './components/Header';
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
// import Add from './components/Add'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/Product" element={<Product/>}/>
        <Route exact path="/Accounts" element={<Accounts/>}/>
        <Route exact path="/Login" element={<Login/>}/>

  
      </Routes>
  
  </Router>
  );
}

export default App;
