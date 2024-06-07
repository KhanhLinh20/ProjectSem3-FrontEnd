import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import HomeTemplates from './templates/HomeTemplates';
import AdminTemplates from './templates/AdminTemplates';
import Product from './pages/Product';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <Routes>
      <Route path='' element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
        
      </Route>
      <Route path='admintemplates' element={<AdminTemplates />}>

       
      </Route>
    </Routes>

  </BrowserRouter>
);



