import React from 'react';

import Inicio from './Inicio.js';
import Cadastro from './Cadastro.js';
import Menu from './Menu.js';
import Formulario from './Formulario.js';
import { Routes, Route} from "react-router-dom";


const App = () => {

  require("./App.css");

  return (
   <div>

   <Menu/>
   <Inicio/>
   <Routes>
        <Route path="/Login" element={<Formulario />} />
        <Route path="/Cadastro" element={<Cadastro />} />
    </Routes>

      
   </div> 
  );
}

export default App;
