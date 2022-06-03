import React from 'react';
import { Routes, Route, Router } from "react-router-dom";
import Inicio from './Inicio.js';
import Cadastro from './assets/Cadastro.js';
import Menu from './Menu.js';
import Login from './Login.js';


const App = () => {

  return (
   <div >

   
      
      
      <div className='fodase'>
        <Menu/>
      </div>
      <Routes>
        <Route path="/Login" element={<Login/>} ></Route>
        <Route path="/Cadastro" element={<Cadastro/>} ></Route>
      </Routes>
      
   </div> 
  );
}

export default App;
