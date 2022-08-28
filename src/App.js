import './App.css';
import Login from './components/Login/login';
import SalesLogin from './components/Login/SalesLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Salesperson from './components/SalesPerson/Salesperson';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddUser from './components/SalesPerson/AddUser';
import Products from './components/Products/Products.js';
import AddProducts from './components/Products/AddProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/SalesLogin" element={<SalesLogin/>}></Route>
        <Route path="/home" element={<Navbar />}></Route>
        <Route path="/salesperson" element={<Salesperson />}></Route>
        <Route path="/users/add" element={<AddUser />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/add" element={<AddProducts />}></Route>
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
