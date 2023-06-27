
import React from 'react'
import './App.css';
import Home from './Pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Productspage from './Pages/Productspage';
import Signuppage from './Pages/Signuppage';
import Loginpage from './Pages/Loginpage';
import Cartpage from './Pages/Cartpage';
import Checkoutpage from './Pages/Checkoutpage';
import Admin from './Pages/Admin';
import Adminsignuppage from './Pages/Adminsignuppage';
import Adminloginpage from './Pages/Adminloginpage';
import Orderproductspage from './Pages/Orderproductspage'
import Orderhistorypage from './Pages/Orderhistorypage'
import Editproductspage from './Pages/Editproductspage';
import Userslistpage from './Pages/Userslistpage';



 function App (){
    return (
 <div>
   
  <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="/admin/addproducts" element={<Productspage/>}></Route>
    <Route path="/signup" element={<Signuppage/>}></Route>
    <Route path="/login" element={<Loginpage/>}></Route>
    <Route path="/logout"></Route>
    <Route path="/cart" element={<Cartpage/>}></Route>
    <Route path="/checkout" element={<Checkoutpage/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/admin/signup" element={<Adminsignuppage/>}></Route>
    <Route path="/admin/login" element={<Adminloginpage/>}></Route>
    <Route path="/admin/orderproducts" element={<Orderproductspage/>}></Route>
    <Route path="/admin/orderhistory" element={<Orderhistorypage/>}></Route>
    <Route path="/admin/editproducts" element={<Editproductspage />}></Route>
    <Route path="/admin/userslist" element={<Userslistpage/>}></Route>
    
    
       
  
      
    
      
        
         
      
    </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App
